import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeMessage } from '../store/actions/messageActions'

const Message = ({ id, type, message }) => {

  const dispatch = useDispatch()
  const className = `message-${type}`
  console.log(className);

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeMessage(id))
    }, 5000)
  }, [])

  return (
    <div className={className}>
      {message}
    </div>
  )
}

export default Message