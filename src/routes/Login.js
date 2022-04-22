import { Button, Input, Spinner } from '../components'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth, useInput } from '../hooks'
import { useDispatch } from 'react-redux'
import API from '../services/api'
import { login } from '../store/actions/userActions'
import { addMessage } from '../store/actions/messageActions'

const Login = () => {
  const isAuth = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoading, setLoading] = useState(false)
  const [email, handleEmail] = useInput('scrolis@mail.com')
  const [password, handlePassword] = useInput('123456')

  const handleLogin = (e) => {
    setLoading(true)
    API.login(email, password)
      .then((data) => {
        dispatch(login(data))
        dispatch(addMessage(Math.random(), 'notify', 'Вход выполнен успешно!'))
        navigate('/user/profile')
      })
      .catch((e) => {
        dispatch(addMessage(Math.random(), 'error', 'Неверный логин или пароль!'))
      })
      .finally(() => {
        setLoading(false)
      })
  }

  if (isAuth)
    return <Navigate to="/user/profile" />

  return (
    <div className="grow flex items-center justify-center">
      <div className="bg-white rounded-md shadow-md p-8  flex flex-col items-center gap-2 w-96">
        <span className="text-xl">Войти</span>
        <Input value={email} onChange={handleEmail} placeholder="Email" type="email" />
        <Input value={password} onChange={handlePassword} placeholder="Пароль" type="password" />
        <Button disabled={isLoading || !( email.length && password.length)} onClick={handleLogin} className="w-full mt-2">{isLoading ? <Spinner type="small" /> : 'Войти'}</Button>
        <div className="text-sm flex gap-1 flex-wrap justify-center">
          <span>Нет аккаунта?</span> <Link className="link" to="/user/registration">Регистрация</Link>
        </div>
      </div>
    </div>
  )
}

export default Login