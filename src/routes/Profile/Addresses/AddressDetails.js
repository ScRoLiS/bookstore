import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { LinkBack } from '../../../components'
import AddressViewForm from '../../../components/AddressViewForm'
import { getElementById } from '../../../utils/arrayUtils'

const AddressDetails = () => {
  const { id } = useParams()
  const { addresses } = useSelector(state => state.addresses)
  const address = getElementById(addresses, id)

  if (!address)
    return <Navigate to="/error" />

  return (
    <div>
      <LinkBack />
      <AddressViewForm address={address} />
    </div>

  )
}

export default AddressDetails