import React from 'react'
import { BiErrorAlt } from 'react-icons/bi'

const PageNotFound = () => {
  return (
    <div className="bg-white p-4 grow rounded-md shadow-md container flex flex-col items-center justify-center">
      <div className="text-red-500 flex text-5xl justify-between items-center">
        <BiErrorAlt className="" /> 404
      </div>
      
      <span className="text-xl font-semibold">Такой страницы нет!</span>
    </div>
  )
}

export default PageNotFound