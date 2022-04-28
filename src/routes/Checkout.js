import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button, AddressViewForm } from '../components'
import { useAuth, useInput } from '../hooks'
import { setForward } from '../store/actions/appActions'
import { addMessage } from '../store/actions/messageActions'

const Checkout = () => {
  const isAuth = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [addressSelect, setAddressSelect] = useInput('default')
  const [cardSelect, setCardSelect] = useInput('default')
  const [address, setAddress] = useState(null)
  const [card, setCard] = useState(null)

  const { cart } = useSelector(state => state.cart)
  const { addresses } = useSelector(state => state.addresses)
  const { cards } = useSelector(state => state.cards)

  const finalPrice = () => {
    return cart.reduce((prev, current) => { return prev + current.count * current.price }, 0)
  }

  const addCardHandler = () => {
    dispatch(setForward('/checkout'))
    navigate('/user/cards/add')
  }

  const addAddressHandler = () => {
    dispatch(setForward('/checkout'))
    navigate('/user/addresses/add')
  }

  const getElementById = (array, id) => {
    id = parseInt(id)

    for (let i = 0; i < array.length; i++) {
      const element = { ...array[i] };
      if (element.id === id)
        return element
    }

    return null
  }

  const payHandle = () => {
    dispatch(addMessage(Math.random(), 'success', 'Оплата произведена!'))
    dispatch(addMessage(Math.random(), 'success', 'Заказ в обработке!'))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    setAddress(getElementById(addresses, addressSelect))
    setCard(getElementById(cards, cardSelect))
  }, [addressSelect, cardSelect])

  if (!isAuth || cart.length === 0) {
    return <Navigate to="/user" />
  }

  return (
    <div className="p-4 rounded-md shadow-md bg-white grow">
      <h1 className="text-lg md:text-2xl font-semibold">Оформление заказа</h1>

      <div className="mt-2">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
          <span className="whitespace-nowrap text-sm md:text-base">Адрес доставки: </span>
          {!addresses.length && <Button onClick={addAddressHandler} type="link" className="ml-2 self-start">Добавить адрес</Button>}
          {addresses.length === 0 ? null : (
            <select className="select-checkout" value={addressSelect} onChange={setAddressSelect}>
              <option value="default" disabled>Выбрать страну</option>
              {addresses.map((item) => {
                const to = item.address.whereTo
                const fo = item.address.whom
                return <option value={item.id} key={item.id}>{to.index}, {to.country}, {to.street} д. {to.home}{to.flat ? ` кв. ${to.flat}` : null}, {fo.secondName} {fo.firstName} {fo.surname}, {fo.tel}</option>
              })}
            </select>
          )}
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
            <span className="whitespace-nowrap text-sm md:text-base">Карта для оплаты: </span>
            {!cards.length && <Button onClick={addCardHandler} type="link" className="ml-2 self-start">Добавить карту</Button>}
            {cards.length === 0 ? null : (
              <select className="select-checkout" value={cardSelect} onChange={setCardSelect}>
                <option value="default" disabled>Выбрать карту</option>
                {cards.map((item) => {
                  return <option value={item.id} key={item.id}>{item.number} {item.date}</option>
                })}
              </select>
            )}
          </div>
        </div>
      </div>
      {address && (
        <div>
          <AddressViewForm address={address} />
          <h1 className="text-base md:text-xl font-medium mt-4">Заказ</h1>
          <div className="flex flex-col gap-2 mt-2">
            {cart.map((item) => {
              return (
                <div key={item.id} className="flex gap-2 p-2 h-20 shadow-sm">
                  <img src={item.image.url} alt={item.name} className="h-full rounded-md" />
                  <div className="text-sm flex flex-col justify-between overflow-hidden">
                    <h1 className="font-medium overflow-hidden text-ellipsis whitespace-nowrap">{item.name}</h1>
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">Количество: {item.count} шт.</span>
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">Сумма: {item.count * item.price} тг.</span>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center">
              <span className="shrink-0">Общее количество:</span>
              <div className="w-full border-dotted border-t-2 mx-2 mt-1"></div>
              <span className="shrink-0">{cart.reduce((prev, current) => { return prev + current.count }, 0)} шт.</span>
            </div>
            <div className="flex items-center">
              <span className="shrink-0">Сумма к оплате:</span>
              <div className="w-full border-dotted border-t-2 mx-2 mt-1"></div>
              <span className="shrink-0">{finalPrice()} тг.</span>
            </div>
            <div className="flex mt-2 justify-center sm:justify-end">
              <Button
                disabled={!card}
                className="md:text-base w-full max-w-[200px]"
                onClick={payHandle}
              >
                {!card ? 'Выберите карту' : `Оплатить ${finalPrice()} тг.`}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Checkout