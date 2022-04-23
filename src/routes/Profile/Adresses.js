import React from 'react'
import { Button } from '../../components'
import { ProfilePage } from '../../containers'

const Adresses = () => {
  return (
    <ProfilePage title="Адреса">
      <div className="flex grow justify-center items-center">
        <div className="flex flex-col gap-2 items-center">
          <span className="text-lg">Нет адресов</span>
          <Button>Добавить адрес</Button>
        </div>
      </div>
    </ProfilePage>
  )
}

export default Adresses