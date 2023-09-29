import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import ApiService from '../helpers/http/apiService';
import { toast } from 'react-toastify';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [categories, setCategories] = useState(null);
  const [titles, setTitles] = useState(null);
  const [industries, setIndustries] = useState(null);
  const [loading, setLoading] = useState(true);

  const api = new ApiService();

  useEffect(() => {
    const fetchData = async (url, stateSetter) => {
      try {
        const response = await api.getWithOutToken(url);
        stateSetter(response.data);
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        // toast.error(`Error fetching data from ${url}: ${error.message}`);
      }
    };

    const fetchDataFromAPI = async () => {
      setLoading(true);
      try {
        const [categoriesData, industriesData, titlesData] = await Promise.all([
          fetchData('/service/categories', setCategories),
          fetchData('/service/industries', setIndustries),
          fetchData('/service/titles', setTitles),
        ]);
        if (categoriesData && industriesData && titlesData) {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    };

    // Fetch data from API endpoints
    fetchDataFromAPI();
  }, []);

  const dataContextValue = useMemo(() => {
    return {
      loading,
      categories,
      titles,
      industries,
    };
  }, [loading, categories, titles, industries]);

  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
