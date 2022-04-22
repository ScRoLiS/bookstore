import React from 'react'

const ProfilePage = ({ title, children }) => {
  return (
    <div>
      <h1 className="text-2xl font-medium">{title}</h1>
      {children}
    </div>
  )
}

export default ProfilePage