import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks'

const Profile = () => {
  const isAuth = useAuth()

  if (!isAuth)
    return <Navigate to="/user/login" />

  return (
    <div className="bg-white rounded-md shadow-md p-4 grow">Profile</div>
  )
}

export default Profile