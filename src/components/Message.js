import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeMessage } from '../store/actions/messageActions'

const Message = ({ id, type, message }) => {

  const dispatch = useDispatch()

  const getClassName = (type) => {
    if (type === 'success')
      return 'message-success'
    if (type === 'error')
      return 'message-error'
    if (type === 'notify')
      return 'message-notify'
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeMessage(id))
    }, 5000)
  }, [])

  return (
    <div className={getClassName(type)}>
      {message}
    </div>
  )
}

export default Message