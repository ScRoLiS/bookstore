import React from 'react'
import DataRow from './DataRow'

const AddressViewForm = ({ address }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2 mt-4">
        <div className="flex flex-col grow gap-2">
          <div className="text-base md:text-xl font-medium">Куда</div>
          <div className="flex flex-col sm:flex-row gap-2">
            <DataRow label="Индекс" value={address.address.whereTo.index} />
            <DataRow label="Страна" value={address.address.whereTo.country} />
          </div>
          <DataRow label="Населенный пункт" value={address.address.whereTo.city} />
          <DataRow label="Улица" value={address.address.whereTo.street} />
          <div className="flex flex-col sm:flex-row gap-2">
            <DataRow label="Дом" value={address.address.whereTo.home} />
            {address.address.whereTo.flat && <DataRow label="Квартира" value={address.address.whereTo.flat} />}
          </div>
        </div>
        <div className="flex flex-col gap-2 grow">
          <div className="text-base md:text-xl font-medium">Кому</div>
          <DataRow label="Фамилия" value={address.address.whom.secondName} />
          <DataRow label="Имя" value={address.address.whom.firstName} />
          <DataRow label="Отчество" value={address.address.whom.surname} />
          <DataRow label="Телефон" value={address.address.whom.tel} />
        </div>
      </div>
    </div>
  )
}

export default AddressViewForm