import React from 'react'
import { Navigate, NavLink, Outlet, } from 'react-router-dom'

const menu = [
  {
    to: '/user/profile',
    label: 'Личные данные'
  },
  {
    to: '/user/cards',
    label: 'Карты'
  },
  {
    to: '/user/purchases',
    label: 'Покупки'
  },
  {
    to: '/user/adresses',
    label: 'Адреса'
  }
]

const Profile = () => {
  const isAuth = true

  const switchLinkStyle = ({ isActive }) => {
    return isActive ? 'link-profile-active' : 'link-profile'
  }

  if (!isAuth)
    return <Navigate to="/user/login" />

  return (
    <div className="bg-white rounded-md shadow-md p-4 grow">
      <div className="flex gap-2">
        <div className="flex flex-col w-52 gap-2">
          {menu.map((item, index) => <NavLink className={switchLinkStyle} to={item.to} key={index}>{item.label}</NavLink>)}
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Profile