import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ViewAdresses = () => {
  const { adresses } = useSelector(state => state.adresses)

  if (!adresses.length) {
    return (
      <div className="flex grow justify-center items-center">
        <div className="flex flex-col gap-2 items-center">
          <span className="text-lg">Нет адресов</span>
          <Link className="button" to="/user/adresses/add">Добавить адрес</Link>
        </div>
      </div>
    )
  }

  return (
    <div>ViewAdresses</div>
  )
}

export default ViewAdresses