import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BookCard } from '../components'
import API from '../services/api'
import { setBooks } from '../store/actions/bookActions'

const Home = () => {
  const dispatch = useDispatch()
  const { books } = useSelector(state => state.books)

  useEffect(() => {
    if (!books.length)
      API.getBooks()
        .then((data) => {
          dispatch(setBooks(data))
        })
  }, [])

  return (
    <div className="grid grid-cols-3 gap-4">
      {books.map((item) => {
        return <BookCard key={item.id} {...item} />
      })}
    </div>
  )
}

export default Home