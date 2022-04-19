import { Button, Input } from '../components'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="grow flex items-center justify-center">
      <div className="bg-white rounded-md shadow-md p-8  flex flex-col items-center gap-2 w-96">
        <span className="text-xl">Войти</span>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Пароль" type="password" />
        <Button className="w-full mt-2">Войти</Button>
        <div className="text-sm flex gap-1 flex-wrap justify-center">
          <span>Нет аккаунта?</span> <Link className="link" to="/user/registration">Регистрация</Link>
        </div>
      </div>
    </div>
  )
}

export default Login