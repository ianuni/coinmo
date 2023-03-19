import React from 'react'
import { useAuth } from '../../context/AuthContext';

function Home() {
  const{currentUser, logOut} = useAuth()

  const handleLogOut = async (e) => {
    await logOut();
  }

  return (
    <>
    <h1>Welcome {currentUser.email}</h1>
    <button onClick={handleLogOut}>logOut</button>
    </>
  )
}

export default Home;