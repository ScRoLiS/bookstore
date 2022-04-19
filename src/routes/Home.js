import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BookCard, SearchFilter, Spinner } from '../components'
import { setBooks } from '../store/actions/bookActions'
import API from '../services/api'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const { books } = useSelector(state => state.books)

  useEffect(() => {
    if (!books.length) {
      setLoading(true)
      API.getBooks()
        .then((data) => {
          dispatch(setBooks(data))
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [])

  return (
    <div className="flex-grow flex flex-col gap-4">
      <SearchFilter />
      <div className="grid md:grid-cols-2 sm:grid-cols-1 2xl:grid-cols-3 gap-4">
        {books.map((item) => {
          return <BookCard key={item.id} {...item} />
        })}
      </div>
      {loading ? <Spinner /> : null}
    </div>
  )
}

export default Home