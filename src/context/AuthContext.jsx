import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import ApiService from '../helpers/http/apiService';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { responseCatcher } from '../helpers/http/response';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const api = new ApiService();

  const fetchUserData = async () => {
    try {
      const tokenData = JSON.parse(localStorage.getItem('token'));
      if (!tokenData || !tokenData.token || tokenData.expires <= new Date().getTime()) {
        // Token has expired or is not present
        handleTokenExpiration();
        return;
      }

      const response = await api.getWithToken('/user');
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      responseCatcher(error);
      handleTokenExpiration();
    }
  };

  useEffect(() => {
    async function checkLocalStorage() {
      const tokenFromLocalStorage = JSON.parse(localStorage.getItem('token'));
      if (tokenFromLocalStorage.token) {
        setToken(tokenFromLocalStorage);
        setIsLoggedIn(true);
        fetchUserData();
      }
      setLoading(false);
    }
    checkLocalStorage();
  }, []);

  const handleTokenExpiration = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    setLoading(false);
    toast.error('Session expired. Please log in again.');
  };

  const authenticateUser = async (response) => {
    const { token: newToken, expires_in } = response.data;
    const expirationTime = new Date().getTime() + expires_in * 1000;
    localStorage.setItem('token', JSON.stringify({ token: newToken, expires: expirationTime }));
    setToken({ token: newToken, expires: expirationTime });
    fetchUserData();
    toast.success(response.message);
  };

  const register = async (userFormData) => {
    try {
      const response = await api.postWithOutToken('/auth/register', userFormData);
    } catch (error) {
      responseCatcher(error);
    }
  };

  const login = async (userData) => {
    try {
      const response = await api.postWithOutToken('/auth/login', userData);
      authenticateUser(response);
    } catch (error) {
      responseCatcher(error);
    }
  };

  const logout = () => {
    toast.success('Logged out Successfully');
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  const authContextValue = useMemo(() => {
    return {
      user,
      isLoggedIn,
      login,
      logout,
      token,
      register,
      fetchUserData,
      loading,
    };
  }, [user, token, isLoggedIn, loading]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
      {/* <ToastContainer /> */}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
