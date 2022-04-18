import React from 'react'
import Button from './Button'

const CartFooter = ({ items }) => {
  return (
    <div className="mt-4 bg-opacity-90 bg-white sticky bottom-0 p-4 flex justify-between items-center">
      <span className="font-semibold text-base md:text-xl">Общая сумма: {items.reduce((prev, current) => {
        return (current.count * current.price) + prev
      }, 0)} тг.</span>
      <Button className="text-xs md:text-sm md:w-36">Оформить</Button>
    </div>
  )
}

export default CartFooter