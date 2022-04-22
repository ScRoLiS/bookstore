import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input } from '../components'
import { useAuth, useInput } from '../hooks'
import API from '../services/api'
import { login } from '../store/actions/userActions'

const Registration = () => {
  const auth = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, handleEmail] = useInput('username@mail.com')
  const [username, handleUsername] = useInput('username')
  const [password, handlePassword] = useInput('123456')
  const [passwordRepeat, handlePasswordRepeat] = useInput('123456')

  const handleRegister = (e) => {
    API.register(email, username, password)
      .then((data) => {
        dispatch(login(data))
        navigate('/user/profile')
      })
  }

  if (auth)
    navigate('/user/profile')


  return (
    <div className="grow flex items-center justify-center">
      <div className="bg-white rounded-md shadow-md p-8 flex flex-col items-center gap-2 w-96">
        <span className="text-xl">Регистрация</span>
        <Input value={email} onChange={handleEmail} placeholder="Email" type="email" />
        <Input value={username} onChange={handleUsername} placeholder="Имя пользователя" type="text" />
        <Input value={password} onChange={handlePassword} placeholder="Пароль" type="password" />
        <Input value={passwordRepeat} onChange={handlePasswordRepeat} placeholder="Повторите пароль" type="password" />
        <Button onClick={handleRegister} className="w-full mt-2">Зарегистрироваться</Button>
        <div className="text-sm flex gap-1 flex-wrap justify-center">
          <span>Есть аккаунт?</span> <Link className="link" to="/user/login">Войти</Link>
        </div>
      </div>
    </div>
  )
}

export default Registration