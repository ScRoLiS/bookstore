import React, { useEffect, useState } from 'react'
import { Button, Input, LinkBack, Spinner } from '../../../components'
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { addMessage } from '../../../store/actions/messageActions'
import { addCard } from '../../../store/actions/cardActions'
import { useInput } from '../../../hooks'
import { useNavigate } from 'react-router-dom'
import API from '../../../services/api'
import { resetForward } from '../../../store/actions/appActions'

const AddCard = () => {

  const [isLoading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const store = useStore()
  const user = useSelector(state => state.user)
  const { forward } = useSelector(state => state.app)
  const [name, nameHandle] = useInput('')
  const [number, numberHandle] = useInput('', 16)
  const [mm, mmHandle] = useInput('', 2)
  const [yy, yyHandle] = useInput('', 2)
  const [cvv, cvvHandle] = useInput('', 3)

  const handleSave = (e) => {
    e.preventDefault()
    setLoading(true)
    dispatch(addCard({
      id: Math.round(Math.random() * 10000),
      name,
      number: number.substring(0, 4) + '********' + number.substring(12, 16),
      date: `${mm}/${yy}`,
      cvv
    }))
    API.udpateCards(user.jwt, store.getState().cards.cards)
      .then(() => {
        dispatch(addMessage(Math.random(), 'success', 'Карта сохранена!'))
        if (forward) {
          navigate(forward)
        } else {
          navigate('/user/cards')
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const numberOnBlurHandle = (e) => {
    if (number.length < 16)
      dispatch(addMessage(Math.random(), 'error', 'Номер карты должен быть не менее 16 символов!'))
  }

  const isValid = () => {
    return !(yy.length === 0 || mm.length === 0 || cvv.length < 3 || number.length < 16)
  }

  useEffect(() => {
    return () => {
      dispatch(resetForward())
    }
  }, [])

  return (
    <div className="grow">
      <LinkBack />
      <form className="flex flex-col grow justify-center items-center">
        <div className="flex flex-col lg:block items-center relative overflow-visible">
          <div className="absolute mt-5 md:mt-20 lg:static rounded-lg lg:ml-36 lg:mt-12 bg-gray-300 flex flex-col gap-4 shadow-md w-[90%] lg:w-96 h-56">
            <div className="bg-gray-500 mt-10 h-20">
            </div>
            <div className="mt-9 md:mt-7 lg:mt-0 px-8 flex justify-center lg:justify-start">
              <Input value={cvv} onChange={cvvHandle} className="input-card lg:ml-auto w-20" type="number" placeholder="CVV" />
            </div>
          </div>
          <div className="rounded-lg z-10 mb-20 lg:absolute top-0 bg-gray-200 flex flex-col justify-between gap-2 shadow-md w-full md:w-96 h-44 md:h-56 p-8">
            <Input value={name} onChange={nameHandle} className="input-card" placeholder="Имя владельца" />
            <Input value={number} onChange={numberHandle} onBlur={numberOnBlurHandle} className="input-card" type="number" placeholder="Номер карты" />
            <div className="flex items-center gap-2">
              <Input value={mm} onChange={mmHandle} className="input-card" type="number" placeholder="MM" />
              <span className="text-2xl text-gray-300">/</span>
              <Input value={yy} onChange={yyHandle} className="input-card" type="number" placeholder="YY" />
              <div className="hidden md:flex gap-2 text-5xl text-gray-400">
                <FaCcMastercard />
                <FaCcVisa />
              </div>
            </div>
          </div>
        </div>
        <Button
          disabled={isLoading | !isValid()}
          submit={true} onClick={handleSave}
          className="mt-4 min-w-[100px]"
        >
          {isLoading ? <Spinner type="small" /> : 'Сохранить'}
        </Button>
      </form>
    </div>
  )
}

export default AddCard