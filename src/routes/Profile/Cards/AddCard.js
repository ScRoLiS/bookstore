import React from 'react'
import { Button, Input } from '../../../components'
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addMessage } from '../../../store/actions/messageActions'
import { addCard } from '../../../store/actions/cardActions'
import { useInput } from '../../../hooks'
import { useNavigate } from 'react-router-dom'

const AddCard = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, nameHandle] = useInput('Kucher Sergey')
  const [number, numberHandle] = useInput('1234987612349876')
  const [mm, mmHandle] = useInput('12')
  const [yy, yyHandle] = useInput('12')
  const [cvv, cvvHandle] = useInput('322')

  const handleSave = (e) => {
    e.preventDefault()
    dispatch(addCard({
      id: Math.random(),
      name,
      number: number.substring(0, 4) + '********' + number.substring(12, 16),
      date: `${mm}/${yy}`,
      cvv
    }))
    dispatch(addMessage(Math.random(), 'success', 'Карта сохранена!'))
    navigate('/user/cards')
  }

  return (
    <form className="flex flex-col grow justify-center items-center">
      <div className="relative overflow-auto">
        <div className="rounded-lg ml-36 mt-12 bg-gray-300 flex flex-col gap-4 shadow-md w-96 h-56">
          <div className="bg-gray-500 mt-10 h-20">
          </div>
          <div className="px-8 flex">
            <Input value={cvv} onChange={cvvHandle} className="input-card ml-auto w-20" type="number" placeholder="CVV" />
          </div>
        </div>
        <div className="rounded-lg absolute top-0 bg-gray-200 flex flex-col justify-between gap-2 shadow-md w-96 h-56 p-8">
          <Input value={name} onChange={nameHandle} className="input-card" placeholder="Имя владельца" />
          <Input value={number} onChange={numberHandle} className="input-card" type="number" placeholder="Номер карты" />
          <div className="flex items-center gap-2">
            <Input value={mm} onChange={mmHandle} className="input-card" type="number" maxLength="2" placeholder="MM" />
            <span className="text-2xl">/</span>
            <Input value={yy} onChange={yyHandle} className="input-card" type="number" maxLength="2" placeholder="YY" />
            <div className="flex gap-2 text-5xl text-gray-400">
              <FaCcMastercard />
              <FaCcVisa />
            </div>
          </div>
        </div>
      </div>
      <Button submit={true} onClick={handleSave} className="mt-4">Сохранить</Button>
    </form>

  )
}

export default AddCard