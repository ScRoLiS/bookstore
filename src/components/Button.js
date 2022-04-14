import React from 'react'
import { useHover } from '../hooks/useHover'

const Button = (props) => {
  const { type = '' } = props.type

  const [ref, hover] = useHover()

  const buttonType = (type) => {
    if (type === 'outline')
      return 'button-outline'
    if (type === 'remove')
      return 'button-remove'
    if (type === 'ghost')
      return 'button-ghost'
  }

  return (
    <button ref={ref} disabled={props.disabled} onClick={props.onClick} className={`button ${buttonType(props.type)} ${props.className}`}>
      {props.onHover && hover ? props.onHover : props.children}
    </button>
  )
}

export default Button