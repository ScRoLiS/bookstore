import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { AddressPart, Button } from '../components'
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
          <div>
            {
              <div className="flex flex-col md:flex-row gap-2 mt-4">
                <div className="flex flex-col grow gap-2">
                  <div className="text-base md:text-xl font-medium">Куда</div>
                  <div className="flex gap-2">
                    <AddressPart label="Индекс" value={address.address.whereTo.index} />
                    <AddressPart label="Страна" value={address.address.whereTo.country} />
                  </div>
                  <AddressPart label="Населенный пункт" value={address.address.whereTo.city} />
                  <AddressPart label="Улица" value={address.address.whereTo.street} />
                  <div className="flex gap-2">
                    <AddressPart label="Дом" value={address.address.whereTo.home} />
                    <AddressPart label="Квартира" value={address.address.whereTo.flat} />
                  </div>
                </div>
                <div className="flex flex-col gap-2 grow">
                  <div className="text-base md:text-xl font-medium">Кому</div>
                  <AddressPart label="Фамилия" value={address.address.whom.secondName} />
                  <AddressPart label="Имя" value={address.address.whom.firstName} />
                  <AddressPart label="Отчество" value={address.address.whom.surname} />
                  <AddressPart label="Телефон" value={address.address.whom.tel} />
                </div>
              </div>
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default Checkout