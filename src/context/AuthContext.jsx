import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import ApiService from '../helpers/http/apiService';
import { toast } from 'react-toastify';
import { responseCatcher } from '../helpers/http/response';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    user: null,
    token: null,
    isLoggedIn: false,
    loading: true,
  });

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
      setAuthState({
        ...authState,
        user: response.data.user,
        loading: false,
      });
    } catch (error) {
      responseCatcher(error);
      handleTokenExpiration();
    }
  };

  const updateUserData = async (newUserData) => {
    try {
      // Make a request to update user data using the API
      const response = await api.putWithToken('/user/update', newUserData);
    
      // Assuming the API response contains the updated user data
      const updatedUserData = response.data.user;

      // Update the user data in the context
      setAuthState((prevState) => ({
        ...prevState,
        user: updatedUserData,
      }));

      toast.success('User data updated successfully.');
    } catch (error) {
      responseCatcher(error);
    }
  };
 
  useEffect(() => {
    async function checkLocalStorage() {
      const tokenFromLocalStorage = JSON.parse(localStorage.getItem('token'));
      if (tokenFromLocalStorage) {
        setAuthState({
          ...authState,
          token: tokenFromLocalStorage,
          isLoggedIn: true,
        });

        if (authState.isLoggedIn) {
          fetchUserData();
        }
      } else {
        setAuthState({
          ...authState,
          loading: false,
        });
      }
    }
    checkLocalStorage();
  }, [authState.isLoggedIn]);


  const handleTokenExpiration = () => {
    setAuthState({
      user: null,
      token: null,
      isLoggedIn: false,
      loading: false,
    });

    localStorage.removeItem('token');
    toast.error('Session expired. Please log in again.');
  };


  const authenticateUser = async (response) => {
    const { token: newToken, expires_in } = response.data;
    const expirationTime = new Date().getTime() + expires_in * 1000;
    localStorage.setItem('token', JSON.stringify({ token: newToken, expires: expirationTime }));
    setAuthState({
      ...authState,
      token: { token: newToken, expires: expirationTime },
      isLoggedIn: true,
    });

    if (authState.isLoggedIn) {
      fetchUserData();
    }

    toast.success(response.message);
  };

  const register = async (userFormData) => {
    try {
      const response = await api.postWithOutToken('/auth/register', userFormData);
    } catch (error) {
      responseCatcher(error);
    }
  };

  const forgotPassword = async (userFormData) => {
    try {
      const response = await api.postWithOutToken('/auth/request-password-reset', userFormData);
      toast.success(response.message)
    } catch (error) {
      responseCatcher(error);
    }
  };

  const resetPassword = async (userFormData) => {
    try {
      const response = await api.postWithOutToken('/auth/verify-password-reset', userFormData);
      toast.success(response.message)
    } catch (error) {
      responseCatcher(error);
    }
  };

  const VerifyAccount = async (userFormData) => {
    try {
      const response = await api.postWithOutToken('/auth/verify-email', userFormData);
      toast.success(response.message)
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
    setAuthState({
      user: null,
      token: null,
      isLoggedIn: false,
      loading: false,
    });

    localStorage.removeItem('token');
  };

  const authContextValue = useMemo(() => {
    return {
      ...authState,
      login,
      logout,
      register,
      fetchUserData,
      forgotPassword,
      resetPassword,
      VerifyAccount,
      updateUserData
    };
  }, [authState]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
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
