import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { MdOutlineClose } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import Button from '../Button'
import Footer from '../Footer'

const NavbarMenu = ({ toggleMenu, isAuth, menu, cart, linkStyleSwich }) => {
  return (
    <nav className="fixed z-40 overflow-y-auto min-h-screen min-w-screen left-0 top-0 right-0 bottom-0 bg-white">
      <div className="container min-h-full p-2 flex flex-col gap-4">
        <Button onClick={toggleMenu} className="self-end mt-2" type="outline" ><MdOutlineClose className="" /></Button>
        <ul className="list-none grow flex-col flex gap-2">
          {menu.map((item, index) => {
            return (
              <li key={index} onClick={toggleMenu}>
                <NavLink to={item.to} className={linkStyleSwich}>
                  {item.icon}
                  <span>{isAuth && item.auth ? item.auth.label : item.label}</span>
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

export default NavbarMenu