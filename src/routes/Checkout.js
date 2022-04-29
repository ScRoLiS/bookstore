import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button, AddressViewForm, Spinner, ViewCart } from '../components'
import { useAuth, useInput } from '../hooks'
import { setForward } from '../store/actions/appActions'
import { setPurchases } from '../store/actions/purchaseActions'
import { addMessage } from '../store/actions/messageActions'
import { resetCart } from '../store/actions/cartAction'
import { getElementById } from '../utils/arrayUtils'
import API from '../services/api'

const Checkout = () => {
  const isAuth = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [card, setCard] = useState(null)
  const [address, setAddress] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [cardSelect, setCardSelect] = useInput('default')
  const [addressSelect, setAddressSelect] = useInput('default')

  const { cart } = useSelector(state => state.cart)
  const { jwt } = useSelector(state => state.user)
  const { cards } = useSelector(state => state.cards)
  const { purchases } = useSelector(state => state.purchases)
  const { addresses } = useSelector(state => state.addresses)


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

  const payHandle = () => {
    setLoading(true)
    API.sendPurchases(jwt, [...purchases, { id: Math.round(Math.random() * 10000000), purchase: cart, address, card, status: 'В обработке' }])
      .then((data) => {
        dispatch(setPurchases(data.purchases))
        dispatch(resetCart())
        dispatch(addMessage(Math.random(), 'success', 'Оплата произведена!'))
        dispatch(addMessage(Math.random(), 'success', 'Заказ в обработке!'))
        navigate('/user/purchases')
      })
      .catch((e) => {
        console.log(e);
        dispatch(addMessage(Math.random(), 'error', e))
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    setAddress(getElementById(addresses, addressSelect))
    setCard(getElementById(cards, cardSelect))
  }, [addressSelect, cardSelect])

  if (!isAuth || cart.length === 0) {
    return <Navigate to="/user/registration" />
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
          <ViewCart cart={cart} />
          <div className="flex mt-2 justify-center sm:justify-end">
            <Button
              disabled={!card || isLoading}
              className="md:text-base w-full max-w-[200px]"
              onClick={payHandle}
            >
              {!card ? 'Выберите карту' : (isLoading ? <Spinner type="medium" /> : `Оплатить ${finalPrice()} тг.`)}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Checkout