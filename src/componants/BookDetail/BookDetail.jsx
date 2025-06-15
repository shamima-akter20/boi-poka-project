import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const BookDetail = () => {
  const { id } = useParams()
  const bookId = parseInt(id)

  const data = useLoaderData()
  console.log(id)
  console.log(data)

  const book = data.find((books) => books.id === bookId)
  console.log(book, bookId)

  const {
    id,
    image,
    category,
    bookName,
    bookAuthor,
    bookType,
    rating,
    totalpage,
    review,
    publisher,
    publishingdate,
  } = book

  return (
    <div>
      <h2>Book Details : {id} </h2>
    </div>
  )
}

export default BookDetail
