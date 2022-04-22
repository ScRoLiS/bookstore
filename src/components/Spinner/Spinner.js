import React from 'react'

import './Spinner.css'

const Spinner = ({ type }) => {

  if (type && type === 'small')
    return (
      <div className="flex flex-grow justify-center items-center">
        <div className="spinner-small"></div>
      </div >
    )

  return (
    <div className="flex flex-grow justify-center items-center">
      <div className="spinner"></div>
    </div>
  )
}

export default Spinner