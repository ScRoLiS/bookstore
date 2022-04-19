import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from '../components'

const Registration = () => {
  return (
    <div className="grow flex items-center justify-center">
      <div className="bg-white rounded-md shadow-md p-4 flex flex-col items-center gap-2 w-96">
        <span className="text-xl">Регистрация</span>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Пароль" type="password" />
        <Input placeholder="Повторите пароль" type="password" />
        <Button className="w-full mt-2">Зарегистрироваться</Button>
        <div className="text-sm flex gap-1 flex-wrap justify-center">
          <span>Есть аккаунт?</span> <Link className="link" to="/user/login">Войти</Link>
        </div>
      </div>
    </div>
  )
}

export default Registration