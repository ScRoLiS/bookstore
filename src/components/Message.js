import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeMessage } from '../store/actions/messageActions'

import { motion } from 'framer-motion'

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
    }, 2500)
  }, [])

  return (
    <motion.div
      transition={{ ease: "easeOut", duration: 0.3 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      className={getClassName(type)}
    >
      {message}
    </motion.div>

  )
}

export default Message