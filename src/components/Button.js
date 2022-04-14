import React from 'react'
import { useHover } from '../hooks/useHover'

const Button = (props) => {
  const className = props.className ? props.className : ''
  const [ref, hover] = useHover()

  const buttonType = (type) => {
    if (type === 'outline') {
      return 'button-outline'
    }
    else if (type === 'remove') {
      return 'button-remove'
    }
    else if (type === 'ghost') {
      return 'button-ghost'
    }
    else return ''
  }

  return (
    <button ref={ref} disabled={props.disabled} onClick={props.onClick} className={`button ${buttonType(props.type)} ${className}`}>
      {props.onHover && hover ? props.onHover : props.children}
    </button>
  )
}

export default Button