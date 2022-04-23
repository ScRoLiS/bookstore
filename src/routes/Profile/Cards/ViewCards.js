import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from '../../../components'
import { removeCard } from '../../../store/actions/cardActions'
import { addMessage } from '../../../store/actions/messageActions'

const ViewCards = () => {
  const dispatch = useDispatch()
  const { cards } = useSelector(state => state.cards)

  const removeHandle = (id) => {
    dispatch(removeCard(id))
    dispatch(addMessage(Math.random(), 'success', 'Карта удалена!'))
  }

  if (!cards.length) {
    return (
      <div className="flex grow justify-center items-center">
        <div className="flex flex-col gap-2 items-center">
          <span className="text-lg">Нет платежных карт</span>
          <Link className="button" to="/user/cards/add">Добавить карту</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="card-table-row font-semibold">
          <div>Владелец</div>
          <div>Номер</div>
          <div>Годен до</div>
        </div>
        {cards.map((item) => {
          return (
            <div key={item.id} className="card-table-row">
              <div>{item.name}</div>
              <div>{item.number}</div>
              <div>{item.date}</div>
              <div className="text-center">
                <Button onClick={() => { removeHandle(item.id) }} type="link" className="border-none text-red-600 hover:text-red-200 hover:border-none">Удалить</Button>
              </div>
            </div>
          )
        })}
      </div>
      <Link to="/user/cards/add" className="button mt-4 self-center">Добавить карту</Link>
    </div>
  )
}

export default ViewCards