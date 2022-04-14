import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsBookHalf, BsCart3 } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const menu = [
  { to: '/', label: 'Магазин', icon: <BsBookHalf className="text-xl" /> },
  { to: '/login', label: 'Вход', icon: <AiOutlineUser className="text-xl" /> }
]

const Navbar = () => {
  const { cart } = useSelector(state => state.cart)

  const linkStyleSwich = ({ isActive }) => {
    return isActive ? 'nav-link-active' : 'nav-link'
  }

  return (
    <nav className="sticky top-0 shadow-md bg-white z-10">
      <div className="container flex justify-between items-center h-16 md:h-24">
        <Link className="flex flex-col" to="/">
          <div className="flex gap-1 xl:gap-2 items-center font-bold text-base md:text-2xl">
            <BsBookHalf className="text-sky-400 mt-0.5 md:mt-1" />
            <span>BOOK<span className="text-sky-400">STORE</span></span>
          </div>
          <div className="font-light text-sm">
            BookStore - магазин твоей мечты!
          </div>
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
      </div>
    </nav>
  )
}

export default Navbar