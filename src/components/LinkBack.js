import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const LinkBack = () => {
  return (
    <Link to=".." className="button button-ghost flex items-center gap-1 -mt-1 lg:mt-0.5 p-2 h-auto mb-4 w-20"><BiArrowBack className="shrink-0" /> Назад</Link>
  )
}

export default LinkBack