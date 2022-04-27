import React from 'react'
import AddressPart from './AddressPart'

const AddressViewForm = ({ address }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2 mt-4">
        <div className="flex flex-col grow gap-2">
          <div className="text-base md:text-xl font-medium">Куда</div>
          <div className="flex flex-col sm:flex-row gap-2">
            <AddressPart label="Индекс" value={address.address.whereTo.index} />
            <AddressPart label="Страна" value={address.address.whereTo.country} />
          </div>
          <AddressPart label="Населенный пункт" value={address.address.whereTo.city} />
          <AddressPart label="Улица" value={address.address.whereTo.street} />
          <div className="flex flex-col sm:flex-row gap-2">
            <AddressPart label="Дом" value={address.address.whereTo.home} />
            <AddressPart label="Квартира" value={address.address.whereTo.flat} />
          </div>
        </div>
        <div className="flex flex-col gap-2 grow">
          <div className="text-base md:text-xl font-medium">Кому</div>
          <AddressPart label="Фамилия" value={address.address.whom.secondName} />
          <AddressPart label="Имя" value={address.address.whom.firstName} />
          <AddressPart label="Отчество" value={address.address.whom.surname} />
          <AddressPart label="Телефон" value={address.address.whom.tel} />
        </div>
      </div>
    </div>
  )
}

export default AddressViewForm