import React from 'react'
import Button from './Button'
import Input from './Input'
import { AiOutlineSearch } from 'react-icons/ai'

const filters = ['Название', 'Автор', 'Жанр']

const SearchFilter = () => {
  return (
    <div className="rounded-md shadow-md bg-white p-4 flex items-center gap-2">
      <div className="grow shrink-0">
        <select name="filters" className="w-full">
          {filters.map((item, index) => <option key={index} value={index}>{item}</option>)}
        </select>
      </div>
      <div className="flex w-full gap-2">
        <Input placeholder="Поиск" />
        <Button className="w-20 text-base"><AiOutlineSearch /></Button>
      </div>
    </div>
  )
}

export default SearchFilter