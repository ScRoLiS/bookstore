import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from '../../../components'
import API from '../../../services/api'
import { removeAddress } from '../../../store/actions/addressActions'
import { addMessage } from '../../../store/actions/messageActions'

const ViewAddresses = () => {
  const store = useStore()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const { addresses } = useSelector(state => state.addresses)

  if (!addresses.length) {
    return (
      <div className="flex grow justify-center items-center">
        <div className="flex flex-col gap-2 items-center">
          <span className="text-lg">Нет адресов</span>
          <Link className="button" to="/user/addresses/add">Добавить адрес</Link>
        </div>
      </div>
    )
  }

  const removeAddressHandle = (id) => {
    dispatch(removeAddress(id))
    dispatch(addMessage(Math.random(), 'success', 'Адрес удален!'))
    API.updateAddresses(user.jwt, store.getState().addresses.addresses)
      .then((data) => {

      })
      .catch((e) => {
        console.log(e);
      })
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-full">
          <div className="adress-table-row font-medium text-center md:text-justify">
            <div className="table-col">Страна</div>
            <div className="table-col">Город</div>
            <div className="table-col">Улица</div>
            <div className="table-col">Дом</div>
          </div>
          {addresses.map((item) => {
            const { country, city, street, home } = item.address.whereTo
            return (
              <div key={item.id} className="adress-table-row text-center md:text-justify">
                <div className="table-col">{country}</div>
                <div className="table-col">{city}</div>
                <div className="table-col">{street}</div>
                <div>{home}</div>
                <div className="flex justify-center md:block col-span-full md:col-span-1 mt-2 md:mt-0">
                  <Link to={`/user/addresses/${item.id}`} className="link mr-3 border-none text-sky-600 hover:text-sky-200 hover:border-none">Подробнее</Link>
                  <Button onClick={() => { removeAddressHandle(item.id) }} to={`/user/addresses/${item.id}`} type="link" className="border-none text-red-600 hover:text-red-200 hover:border-none">Удалить</Button>
                </div>
              </div>
            )
          })}
        </div>
        <Link className="button mt-4" to="/user/addresses/add">Добавить</Link>
      </div>
    </div>
  )
}

export default ViewAddresses