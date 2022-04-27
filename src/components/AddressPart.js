import React from 'react'

const AddressPart = ({ label = null, value }) => {
  return (
    <div className="input-uneditable grow">
      <div className="text-xs overflow-hidden text-ellipsis">{label}</div>
      <div className="overflow-hidden text-ellipsis">{value}</div>
    </div>
  )
}

export default AddressPart