import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import AddressViewForm from '../../../components/AddressViewForm'

const AddressDetails = () => {
  const { id } = useParams()
  const { addresses } = useSelector(state => state.addresses)
  const address = getAddressById(id)

  function getAddressById(id) {
    id = parseInt(id)
    for (let i = 0; i < addresses.length; i++) {
      const element = addresses[i];
      if (element.id === id)
        return element
    }
    return null
  }

  if(!address)
    return <Navigate to="/error" />

  return (
    <AddressViewForm address={address} />
  )
}

export default AddressDetails