import React, { useState } from 'react'
import { Button } from '..'
import { Link, NavLink } from 'react-router-dom'
import { BsBookHalf, BsCart3 } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useAuth } from '../../hooks'
import NavbarMenu from './NavbarMenu'

const menu = [
  { to: '/', label: 'Магазин', icon: <BsBookHalf className="text-xl" /> },
  { to: '/user', label: 'Вход', icon: <AiOutlineUser className="text-xl" />, auth: { label: 'Кабинет' } }
]

const Navbar = () => {
  const isAuth = useAuth()
  const [showMenu, setShowMenu] = useState(false)
  const { cart } = useSelector(state => state.cart)

  const linkStyleSwich = ({ isActive }) => {
    return isActive ? 'nav-link-active' : 'nav-link'
  }

  const cartStyleSwich = ({ isActive }) => {
    return isActive ? 'cart-link-active' : 'cart-link'
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu)
    document.body.classList.toggle('fixed')
  }

  if (showMenu) {
    return (
      <NavbarMenu 
        cart={cart}
        menu={menu}
        toggleMenu={toggleMenu}
        isAuth={isAuth}
        linkStyleSwich={linkStyleSwich}
      />
    )
  }

  return (
    <nav className="sticky top-0 shadow-md bg-white z-40">
      <div className="container flex flex-wrap gap-2 justify-between items-center py-4 md:py-0 md:h-24">
        <Link className="flex flex-col" to="/">
          <div className="flex gap-1 xl:gap-2 items-center font-bold text-base md:text-2xl">
            <BsBookHalf className="text-sky-400 md:mt-1" />
            <span>BOOK<span className="text-sky-400">STORE</span></span>
          </div>
          <div className="hidden md:block font-light text-sm">
            BookStore - магазин твоей мечты!
          </div>
        </Link>
        <div className="flex gap-2">
          <ul className="list-none hidden md:flex gap-2">
            {menu.map((item, index) => {
              return (
                <li key={index} >
                  <NavLink to={item.to} className={linkStyleSwich}>
                    {item.icon}
                    <span>{isAuth && item.auth ? item.auth.label : item.label}</span>
                  </NavLink>
                </li>
              )
            })}
            <li>
              <NavLink to="/cart" className={linkStyleSwich}>
                <div className="flex items-center">
                  <BsCart3 className="text-xl" />
                  {cart.length ? <span className="cart-size">+{cart.length}</span> : null}
                </div>
                <span>Корзина</span>
              </NavLink>
            </li>
          </ul>
          {cart.length
            ? <NavLink to="/cart" className={cartStyleSwich}>
              <div className="flex items-center">
                <BsCart3 className="text-xl" />
                {cart.length ? <span className="cart-size">+{cart.length}</span> : null}
              </div>
            </NavLink>
            : null
          }
          <Button onClick={toggleMenu} className="block md:hidden" type="outline" ><GiHamburgerMenu /></Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar