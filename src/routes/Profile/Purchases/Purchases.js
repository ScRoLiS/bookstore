import React from 'react'
import { Outlet } from 'react-router-dom'
import { ProfilePage } from '../../../containers'

const Purchases = () => {
  return (
    <ProfilePage title="Покупки">
      <Outlet />
    </ProfilePage>
  )
}

export default Purchases