import React from 'react'

const AddressPart = ({ label = null, value }) => {
  return (
    <div className="input-uneditable grow">
      <div className="text-xs">{label}</div>
      <div>{value}</div>
    </div>
  )
}

export default AddressPart