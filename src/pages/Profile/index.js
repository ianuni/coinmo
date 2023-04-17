import React, {useEffect} from 'react'
import { useAuth } from '../../context/AuthContext'

function Profile() {
  const {logOut, currentUserData, loading} = useAuth()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      /*behavior: "smooth"*/
    });
  }, []);

  return (
    <>
    <button onClick={logOut}>Sign out</button>
    {!loading ?
      <>
      <h1>{currentUserData.name}</h1> 
      <span>{currentUserData.category}</span>
      <h1>{currentUserData.address}</h1>
      </>
     : loading}
    </>
  )
}

export default Profile