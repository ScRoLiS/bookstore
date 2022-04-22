import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button, Input, Spinner } from '../components'
import { useAuth, useInput } from '../hooks'
import API from '../services/api'
import { login } from '../store/actions/userActions'

const Registration = () => {
  const isAuth = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoading, setLoading] = useState(false)
  const { cart } = useSelector(state => state.cart)
  const [email, handleEmail] = useInput('')
  const [username, handleUsername] = useInput('')
  const [password, handlePassword] = useInput('')
  const [passwordRepeat, handlePasswordRepeat] = useInput('')

  const handleRegister = (e) => {
    setLoading(true)
    API.register(email, username, password)
      .then((data) => {
        dispatch(login(data))
        navigate('/user/profile')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  if (isAuth)
    return <Navigate to="/user/profile" />


  return (
    <div className="grow flex items-center justify-center">
      <div className="bg-white rounded-md shadow-md p-8 flex flex-col items-center gap-2 w-96">
        <span className="text-xl">Регистрация</span>
        <Input value={email} onChange={handleEmail} placeholder="Email" type="email" />
        <Input value={username} onChange={handleUsername} placeholder="Имя пользователя" type="text" />
        <Input value={password} onChange={handlePassword} placeholder="Пароль" type="password" />
        <Input value={passwordRepeat} onChange={handlePasswordRepeat} placeholder="Повторите пароль" type="password" />
        <Button disabled={isLoading} onClick={handleRegister} className="w-full mt-2">{isLoading ? <Spinner type="small" /> : 'Зарегистрироваться'}</Button>
        <div className="text-sm flex gap-1 flex-wrap justify-center">
          <span>Есть аккаунт?</span> <Link className="link" to="/user/login">Войти</Link>
        </div>
      </div>
    </div>
  )
}

export default Registration