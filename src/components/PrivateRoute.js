import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'
import Loading from "./Loading/index"

export const PrivateRoute = ({children}) => {
  const {currentUserToken, loading} = useAuth();
  if(!currentUserToken) return <Navigate to="/signin"/>;
  if(loading) return <Loading text="loading user information"/>;
  return <>{children}</>;
}

