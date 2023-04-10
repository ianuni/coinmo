import React from 'react'
import { useAuth } from '../../context/AuthContext'

function Profile() {
  const {logOut, currentUserData, loading} = useAuth()

  console.log(currentUserData)
  return (
    <>
    <button onClick={logOut}>Sign out</button>
    {!loading ?
      <>
      <h1>{currentUserData.name}</h1> 
      <span>{currentUserData.category}</span>
      </>
     : loading}
    </>
  )
}

export default Profile