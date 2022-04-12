import React from 'react'
import { useHover } from '../hooks/useHover'

const Button = (props) => {

  const [ref, hover] = useHover()

  const buttonType = (type) => {
    if (type === 'primary')
      return 'button'
    if (type === 'outline')
      return 'button-outline'
    if (type === 'remove')
      return 'button-remove'
  }

  return (
    <button ref={ref} onClick={props.onClick} className={`font-medium text-md ${buttonType(props.type)} ${props.className}`}>
      {props.onHover && hover ? props.onHover : props.children}
    </button>
  )
}

export default Button