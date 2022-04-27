import React from 'react'

const ProfilePage = ({ title, children }) => {
  return (
    <div className="flex flex-col grow">
      <h1 className="text-xl md:text-2xl font-medium mb-4">{title}</h1>
      {children}
    </div>
  )
}

export default ProfilePage