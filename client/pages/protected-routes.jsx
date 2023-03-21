import React from 'react';
import Home from './home';
import HomeAdmin from './homeAdmin';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
  const user = localStorage.getItem('user');
  if (user === 'yooleejoyce') {
    return <HomeAdmin />;
  } else if (user === 'guest') {
    return <Home/>;
  } else {
    return <Navigate to = '/' />;
  }
};

export default ProtectedRoutes;
