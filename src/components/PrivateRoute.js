import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'
import Loading from "./Loading/index"

export const PrivateRoute = ({children}) => {
  const {currentUser, loading} = useAuth();

  if(loading) return <Loading text="loading user information"/>;
  if(!currentUser) return <Navigate to="/signin"/>;

  return <>{children}</>;
}

