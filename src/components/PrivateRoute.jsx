import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const PrivateRoute = ({ children }) => {
    const { token } = useAuth();
  
    return token ? (
        children
    ) : (
      <Navigate to="/login" />
    );
  };
  
export default PrivateRoute