import React from 'react'
import { ProfilePage } from '../../containers'

const Purchases = () => {
  return (
    <ProfilePage title="Покупки">
      <div className="flex grow justify-center items-center">
        <div className="flex flex-col gap-2 items-center">
          <span className="text-lg">Нет покупок</span>
        </div>
      </div>
    </ProfilePage>
  )
}

export default Purchases