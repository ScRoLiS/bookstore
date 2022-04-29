import { Button, Input, Spinner } from '../components'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth, useInput } from '../hooks'
import { useDispatch } from 'react-redux'
import API from '../services/api'
import { login } from '../store/actions/userActions'
import { addMessage } from '../store/actions/messageActions'
import { setCart } from '../store/actions/cartAction'
import { setCards } from '../store/actions/cardActions'
import { setAddresses } from '../store/actions/addressActions'
import { setPurchases } from '../store/actions/purchaseActions'

const Login = () => {
  const isAuth = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoading, setLoading] = useState(false)
  const [email, handleEmail] = useInput('')
  const [password, handlePassword] = useInput('')

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    API.login(email, password)
      .then((data) => {
        dispatch(login(data))
        dispatch(setCart(data.user.cart))
        dispatch(setCards(data.user.cards))
        dispatch(setAddresses(data.user.addresses))
        dispatch(setPurchases(data.user.purchases))
        dispatch(addMessage(Math.random(), 'success', 'Вход выполнен успешно!'))
        navigate('/user/profile')
      })
      .catch((e) => {
        dispatch(addMessage(Math.random(), 'error', 'Неверный email или пароль!'))
      })
      .finally(() => {
        setLoading(false)
      })
  }

  if (isAuth)
    return <Navigate to="/user/profile" />

  return (
    <div className="grow flex items-center justify-center">
      <form className="bg-white rounded-md shadow-md p-8  flex flex-col items-center gap-2 w-96">
        <span className="text-xl">Войти</span>
        <Input value={email} onChange={handleEmail} placeholder="Email" type="email" />
        <Input value={password} onChange={handlePassword} placeholder="Пароль" type="password" />
        <Button submit={true} disabled={isLoading || !(email.length && password.length)} onClick={handleLogin} className="w-full mt-2">{isLoading ? <Spinner type="small" /> : 'Войти'}</Button>
        <div className="text-sm flex gap-1 flex-wrap justify-center">
          <span>Нет аккаунта?</span> <Link className="link" to="/user/registration">Регистрация</Link>
        </div>
      </form>
    </div>
  )
}

export default Login