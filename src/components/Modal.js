import React from 'react'
import Button from './Button'

const Modal = ({ children, onClick }) => {
  return (
    <div className="fixed flex items-center justify-center z-50 w-full h-full bg-black bg-opacity-70">
      <div className="p-5 flex flex-col items-center mx-6 gap-5 max-w-lg max-h-full bg-white shadow-md rounded-md">
        {children}
        <Button onClick={onClick} >Закрыть</Button>
      </div>
    </div>
  )
}

export default Modal