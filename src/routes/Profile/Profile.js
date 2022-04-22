import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, NavLink, Outlet, useNavigate, } from 'react-router-dom'
import { Button } from '../../components'
import { useAuth } from '../../hooks'
import { logout } from '../../store/actions/userActions'

const menu = [
  {
    to: '/user/profile',
    label: 'Личные данные'
  },
  {
    to: '/user/cards',
    label: 'Платежные карты'
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
  const isAuth = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const switchLinkStyle = ({ isActive }) => {
    return isActive ? 'link-profile-active' : 'link-profile'
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate('/user/login')
  }

  if (!isAuth)
    return <Navigate to="/user/login" />

  return (
    <div className="bg-white rounded-md shadow-md p-4 grow">
      <div className="flex gap-8">
        <div className="flex flex-col w-52 gap-2 shrink-0">
          {menu.map((item, index) => <NavLink className={switchLinkStyle} to={item.to} key={index}>{item.label}</NavLink>)}
          <Button type="ghost" className="w-full" onClick={handleLogout}>Выход</Button>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Profile