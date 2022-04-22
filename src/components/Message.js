import React, { useEffect } from 'react'
import { BiErrorAlt } from 'react-icons/bi'
import { BsExclamationCircle } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { removeMessage } from '../store/actions/messageActions'

const Message = ({ id, type, message }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      console.log(id);
      dispatch(removeMessage(id))
    }, 5000)
  }, [])

  if (type === 'notify')
    return (
      <div className="max-w-xs p-4 text-white bg-green-300 shadow-md rounded-md flex items-center gap-2">
        <BsExclamationCircle />
        {message}
      </div>
    )

  if (type === 'error')
    return (
      <div className="max-w-xs p-4 text-white bg-red-300 shadow-md rounded-md items-center flex gap-2">
        <BiErrorAlt />
        {message}
      </div>
    )

  return (
    <div>{message}</div>
  )
}

export default Message