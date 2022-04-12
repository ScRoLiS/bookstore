import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsBookHalf, BsCart3 } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'

const menu = [
  { to: '/', label: 'Магазин', icon: <BsBookHalf className="text-xl" /> },
  { to: '/login', label: 'Вход', icon: <AiOutlineUser className="text-xl" /> },
  { to: '/cart', label: 'Корзина', icon: <BsCart3 className="text-xl" /> }
]

const Navbar = () => {
  const linkStyleSwich = ({ isActive }) => {
    return isActive ? 'nav-link-active' : 'nav-link'
  }

  return (
    <nav className="shadow-md bg-white">
      <div className="container flex justify-between items-center h-24">
        <Link className="flex gap-2 items-center text-2xl font-bold" to="/">
          <BsBookHalf className="text-sky-400 mt-1" />
          <span>BOOK<span className="text-sky-400">STORE</span></span>
        </Link>
        <ul className="list-none flex gap-2">
          {menu.map((item, index) => {
            return (
              <li key={index} >
                <NavLink to={item.to} className={linkStyleSwich}>
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar