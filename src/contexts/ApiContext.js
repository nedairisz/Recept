import React, { createContext, useState } from 'react';
import axios from './MyAxios';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (endpoint) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(endpoint);
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const postData = async (endpoint, body) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(endpoint, body);
      setData((prevData) => [...prevData, response.data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApiContext.Provider value={{ data, loading, error, fetchData, postData }}>
      {children}
    </ApiContext.Provider>
  );
};