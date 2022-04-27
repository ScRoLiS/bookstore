import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button } from '../components'
import { useAuth } from '../hooks'
import { setForward } from '../store/actions/appActions'

const Checkout = () => {
  const isAuth = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { cart } = useSelector(state => state.cart)
  const { addresses } = useSelector(state => state.addresses)
  const { cards } = useSelector(state => state.cards)


  if (!isAuth || cart.length === 0) {
    return <Navigate to="/user/registration" />
  }

  const addCardHandler = () => {
    dispatch(setForward('/checkout'))
    navigate('/user/cards/add')
  }

  const addAddressHandler = () => {
    dispatch(setForward('/checkout'))
    navigate('/user/addresses/add')
  }

  return (
    <div className="p-4 rounded-md shadow-md bg-white grow">
      <h1 className="text-2xl font-semibold">Оформление заказа</h1>
      <div>
        <div className="flex">
          <span>Адрес доставки: </span>
          {!addresses.length && <Button onClick={addAddressHandler} type="link" className="ml-2">Добавить адрес</Button>}
          {addresses.length === 0 ? null : (
            <select>
              {addresses.map((item) => {
                const to = item.address.whereTo
                const fo = item.address.whom
                return <option key={item.id}>{to.index}, {to.country}, {to.street} д. {to.home}{to.flat ? ` кв. ${to.flat}` : null}, {fo.secondName} {fo.firstName} {fo.surname}, {fo.tel}</option>
              })}
            </select>
          )}
        </div>
        <div className="flex">
          <span>Карта для оплаты: </span>
          {!cards.length && <Button onClick={addCardHandler} type="link" className="ml-2">Добавить карту</Button>}
          {cards.length === 0 ? null : (
            <select>
              {cards.map((item) => {
                return <option key={item.id}>{item.number} {item.date}</option>
              })}
            </select>
          )}
        </div>
      </div>
    </div>
  )
}

export default Checkout