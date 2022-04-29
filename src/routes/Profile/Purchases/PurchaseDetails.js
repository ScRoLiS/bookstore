import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AddressViewForm, LinkBack, ViewCart } from '../../../components'
import { getElementById } from '../../../utils/arrayUtils'

const PurchaseDetails = () => {
  const { id } = useParams()
  const { purchases } = useSelector(state => state.purchases)

  const purchase = getElementById(purchases, id)

  return (
    <div>
      <LinkBack />
      <AddressViewForm address={purchase.address} />
      <ViewCart cart={purchase.purchase} />
    </div>
  )
}

export default PurchaseDetails