import React from 'react'
import { Outlet } from 'react-router-dom'
import { ProfilePage } from '../../../containers'

const Cards = () => {
  return (
    <ProfilePage title="Платежные карты">
      <Outlet />
    </ProfilePage>
  )
}

export default Cards