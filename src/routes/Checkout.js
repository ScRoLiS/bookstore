import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button } from '../components'
import AddressViewForm from '../components/AddressViewForm'
import { useAuth, useInput } from '../hooks'
import { setForward } from '../store/actions/appActions'

const Checkout = () => {
  const isAuth = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [addressSelect, setAddressSelect] = useInput('default')
  const [cardSelect, setCardSelect] = useInput('default')
  const [address, setAddress] = useState(null)
  const { cart } = useSelector(state => state.cart)
  const { addresses } = useSelector(state => state.addresses)
  const { cards } = useSelector(state => state.cards)

  const addCardHandler = () => {
    dispatch(setForward('/checkout'))
    navigate('/user/cards/add')
  }

  const addAddressHandler = () => {
    dispatch(setForward('/checkout'))
    navigate('/user/addresses/add')
  }

  const getAddressById = (id) => {

    id = parseInt(id)

    for (let i = 0; i < addresses.length; i++) {
      const element = addresses[i];
      if (element.id === id)
        return element
    }

    return null
  }

  useEffect(() => {
    setAddress(getAddressById(addressSelect))
  }, [addressSelect])

  if (!isAuth || cart.length === 0) {
    return <Navigate to="/user/registration" />
  }

  return (
    <div className="p-4 rounded-md shadow-md bg-white grow">
      <h1 className="text-lg md:text-2xl font-semibold">Оформление заказа</h1>
      <div>
        <div className=" mt-2">
          <div className="flex items-center gap-2 mt-2">
            <span className="whitespace-nowrap">Адрес доставки: </span>
            {!addresses.length && <Button onClick={addAddressHandler} type="link" className="ml-2">Добавить адрес</Button>}
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
            <div className="flex items-center gap-2 mt-2">
              <span className="whitespace-nowrap">Карта для оплаты: </span>
              {!cards.length && <Button onClick={addCardHandler} type="link" className="ml-2">Добавить карту</Button>}
              {cards.length === 0 ? null : (
                <select className="select-checkout" value={cardSelect} onChange={setCardSelect}>
                  <option value="default" disabled>Выбрать карту</option>
                  {cards.map((item) => {
                    return <option key={item.id}>{item.number} {item.date}</option>
                  })}
                </select>
              )}
            </div>
          </div>
        </div>
        {address && (
          <AddressViewForm address={address} />
        )}
      </div>
    </div>
  )
}

export default Checkout