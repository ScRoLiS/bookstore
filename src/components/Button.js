import React from 'react'
import { useHover } from '../hooks'

const Button = (props) => {
  const className = props.className ? props.className : ''
  const [ref, hover] = useHover()

  const buttonType = (type) => {
    if (type === 'outline') {
      return 'button button-outline'
    }
    else if (type === 'remove') {
      return 'button button-remove'
    }
    else if (type === 'ghost') {
      return 'button button-ghost'
    }
    else if (type === 'link') {
      return 'link'
    }
    else return 'button'
  }

  return (
    <button ref={ref} type={props.submit ? 'submit' : 'button'} disabled={props.disabled} onClick={props.onClick} className={`${buttonType(props.type)} ${className}`}>
      {props.onHover && hover ? props.onHover : props.children}
    </button>
  )
}

export default Button