import React from 'react'
import { Outlet } from 'react-router-dom'
import { ProfilePage } from '../../../containers'

const Adresses = () => {
  return (
    <ProfilePage title="Адреса">
      <Outlet />
    </ProfilePage>
  )
}

export default Adresses