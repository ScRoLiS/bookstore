import React, { useState } from 'react'
import { Button, Footer } from './'
import { Link, NavLink } from 'react-router-dom'
import { BsBookHalf, BsCart3 } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md';

const menu = [
  { to: '/', label: 'Магазин', icon: <BsBookHalf className="text-xl" /> },
  { to: '/login', label: 'Вход', icon: <AiOutlineUser className="text-xl" /> }
]

const Navbar = () => {
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
      <nav className="fixed z-10 overflow-y-auto min-h-screen min-w-screen left-0 top-0 right-0 bottom-0 bg-white">
        <div className="container min-h-full p-2 flex flex-col gap-4">
          {/* <Button onClick={toggleMenu} className="self-end mt-2" type="outline" ><MdOutlineClose className="text-lg" /></Button> */}
          <ul className="list-none grow flex-col flex gap-2">
            {menu.map((item, index) => {
              return (
                <li key={index} onClick={toggleMenu}>
                  <NavLink to={item.to} className={linkStyleSwich}>
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              )
            })}
            <li onClick={toggleMenu}>
              <NavLink to="/cart" className={linkStyleSwich}>
                <div className="flex items-center">
                  <BsCart3 className="text-xl" />
                  {cart.length ? <span className="cart-size">+{cart.length}</span> : null}
                </div>
                <span>Корзина</span>
              </NavLink>
            </li>
          </ul>
          <Footer />
        </div>
      </nav>
    )
  }

  return (
    <nav className="sticky top-0 shadow-md bg-white z-10">
      <div className="container flex gap-2 justify-between items-center h-16 md:h-24">
        <Link className="flex flex-col" to="/">
          <div className="flex gap-1 xl:gap-2 items-center font-bold text-base md:text-2xl">
            <BsBookHalf className="text-sky-400 mt-0.5 md:mt-1" />
            <span>BOOK<span className="text-sky-400">STORE</span></span>
          </div>
          <div className="hidden md:block font-light text-sm">
            BookStore - магазин твоей мечты!
          </div>
        </Link>
        <ul className="list-none hidden md:flex gap-2">
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
    </nav>
  )
}

export default Navbar