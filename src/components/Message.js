import React, { useEffect } from 'react'
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

  return (
    <div className={`message-${type}`}>
      {message}
    </div>
  )
}

export default Message