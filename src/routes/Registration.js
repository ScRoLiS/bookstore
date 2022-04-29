import React, { useState } from 'react'
import { BiShow } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button, Input, Spinner } from '../components'
import { useAuth, useInput } from '../hooks'
import API from '../services/api'
import { resetForward } from '../store/actions/appActions'
import { setCart } from '../store/actions/cartAction'
import { addMessage } from '../store/actions/messageActions'
import { login } from '../store/actions/userActions'

const Registration = () => {
  const isAuth = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showPass, setShowPass] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [email, handleEmail] = useInput('')
  const [username, handleUsername] = useInput('')
  const [password, handlePassword] = useInput('')
  const [passwordRepeat, handlePasswordRepeat] = useInput('')

  const { forward } = useSelector(state => state.app)
  const { cart } = useSelector(state => state.cart)

  const handleRegister = (e) => {
    e.prevenDefault()
    
    setLoading(true)
    API.register(email, username, password, cart)
      .then((data) => {
        dispatch(login(data))
        dispatch(setCart(data.user.cart))
        if (forward) {
          dispatch(resetForward())
          navigate('/checkout')
        } else {
          navigate('/user/profile')
        }
      })
      .catch(({ message }) => {
        dispatch(addMessage(Math.random(), 'error', 'Введен неправильный email или имя пользователя'))
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const switchPassword = (e) => {
    e.preventDefault()
    setShowPass(state => !state)
  }

  const isValid = () => {
    return !((password.length > 0 && passwordRepeat.length > 0 && username.length > 0 && email.length > 0) && (password === passwordRepeat))
  }

  if (isAuth)
    return <Navigate to="/user/profile" />


  return (
    <div className="grow flex items-center justify-center">
      <form className="bg-white rounded-md shadow-md p-8 flex flex-col items-center gap-2 w-96">
        <span className="text-xl">Регистрация</span>
        <Input value={email} onChange={handleEmail} placeholder="Email" type="email" />
        <Input value={username} onChange={handleUsername} placeholder="Имя пользователя" type="text" />
        <div className="w-full relative">
          <Input value={password} onChange={handlePassword} placeholder="Пароль" type={`${showPass ? 'text' : 'password'}`} />
          <button
            onClick={switchPassword}
            className={`mr-2 p-1 absolute right-0 top-1/2 -translate-y-1/2 border border-sky-200 rounded-md ${showPass ? 'bg-sky-400' : ''}`}
          >
            <BiShow className={`${showPass ? 'text-white' : 'text-sky-400'}`} />
          </button>
        </div>
        <Input value={passwordRepeat} onChange={handlePasswordRepeat} placeholder="Повторите пароль" type={`${showPass ? 'text' : 'password'}`} />
        <Button submit={true} disabled={isLoading || isValid()} onClick={handleRegister} className="w-full mt-2">{isLoading ? <Spinner type="small" /> : 'Зарегистрироваться'}</Button>
        <div className="text-sm flex gap-1 flex-wrap justify-center">
          <span>Есть аккаунт?</span> <Link className="link" to="/user/login">Войти</Link>
        </div>
      </form>
    </div>
  )
}

export default Registration