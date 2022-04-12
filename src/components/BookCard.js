import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'

const BookCard = (props) => {
  const navigate = useNavigate()

  const handleMoreButton = () => {
    navigate('/book/' + props.id)
  }

  return (
    <div className="bg-white flex shadow-md rounded-md overflow-hidden">
      <img className="w-1/2" src={props.img} alt={props.name} />
      <div className="w-full p-4 flex flex-col">
        <span className="font-medium text-ellipsis">
          {props.name.length > 20 ? props.name.substring(0, 20) + '...' : props.name}
        </span>
        <div className="mt-auto text-xs flex flex-col gap-2">
          <span>Автор: {props.author}</span>
          <span>Кол-во страниц: {props.pages}</span>
          <span>Цена: {props.price} тг.</span>
          <Link to={`/book/${props.id}`}></Link>
          <Button onClick={handleMoreButton} type="outline">Подробнее</Button>
          <Button type="primary">В корзину</Button>
        </div>
      </div>
    </div>
  )
}

export default BookCard