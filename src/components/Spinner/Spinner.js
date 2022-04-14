import React from 'react'

import './Spinner.css'

const Spinner = () => {
  return (
    <div className="flex h-full flex-grow justify-center items-center">
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Spinner