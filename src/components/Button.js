import React from 'react'

const Button = (props) => {

  const buttonType = (type) => {
    if (type === 'primary')
      return 'button'
    if (type === 'outline')
      return 'button-outline'
  }
  return (
    <button onClick={props.onClick} className={`font-medium text-md ${buttonType(props.type)} ${props.className}`}>{props.children}</button>
  )
}

export default Button