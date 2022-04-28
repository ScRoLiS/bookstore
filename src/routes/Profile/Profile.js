import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, NavLink, Outlet, useNavigate, } from 'react-router-dom'
import { Button } from '../../components'
import { useAuth } from '../../hooks'
import { resetAddresses } from '../../store/actions/addressActions'
import { resetCards } from '../../store/actions/cardActions'
import { resetCart } from '../../store/actions/cartAction'
import { logout } from '../../store/actions/userActions'

const menu = [
  {
    to: '/user/profile',
    label: 'Данные профиля'
  },
  {
    to: '/user/cards',
    label: 'Платежные карты'
  },
  {
    to: '/user/addresses',
    label: 'Адреса'
  },
  {
    to: '/user/purchases',
    label: 'Покупки'
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
    dispatch(resetCart())
    dispatch(resetCards())
    dispatch(resetAddresses())
    navigate('/user/login')
  }

  if (!isAuth)
    return <Navigate to="/user/login" />

  return (
    <div className="bg-white rounded-md shadow-md p-4 flex flex-col min-h-[600px] md:min-h-[auto] md:grow">
      <div className="flex flex-col md:flex-row gap-8 grow">
        <div className="flex flex-row md:flex-col md:w-40 lg:w-52 gap-2 shrink-0">
          <div className="flex flex-wrap flex-row w-full md:w-auto md:flex-col gap-2 sticky top-28">
            {menu.map((item, index) => <NavLink className={switchLinkStyle} to={item.to} key={index}>{item.label}</NavLink>)}
            <Button type="ghost" className="grow w-auto h-[32px] md:h-auto md:grow-0 md:w-full" onClick={handleLogout}>Выход</Button>
          </div>
        </div>
        <div className="flex flex-col grow">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Profile