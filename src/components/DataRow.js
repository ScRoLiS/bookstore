import React from 'react'

const DataRow = ({ label = null, value, className = '' }) => {
  return (
    <div className={`data-row grow ${className}`}>
      <div className="text-xs overflow-hidden text-ellipsis">{label}</div>
      <div className="text-sm md:text-base overflow-hidden text-ellipsis">{value}</div>
    </div>
  )
}

export default DataRow