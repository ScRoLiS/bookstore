import React from 'react'
import { useSelector } from 'react-redux'
import { DataRow } from '../../components'
import { ProfilePage } from '../../containers'

const UserProfile = () => {
  const { user } = useSelector(state => state.user)
  const createdAt = new Date(user.createdAt).toLocaleString('en-GB')

  return (
    <ProfilePage title="Данные профиля">
      <div className="flex flex-col gap-2">
        <DataRow label="Email" value={user.email} />
        <DataRow label="Имя пользователя" value={user.username} />
        <DataRow label="Дата и время регистрации" value={createdAt} />
        <DataRow label="Статус блокировки" className={user.blocked ? 'bg-red-400 text-white' : 'bg-green-400 text-white'} value={user.blocked ? 'Заблокирован' : 'Не заблокирован'} />
      </div>
    </ProfilePage>
  )
}

export default UserProfile