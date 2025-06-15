import React from 'react'
import { Link } from 'react-router-dom'

const Book = ({ book }) => {
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
    <Link to={`/books/${id}`}>
      <div className="">
        <div className="card bg-base-100 w-56 shadow-sm">
          <figure className="bg-gray-200">
            <img src={image} alt={bookName} className="h-[166px]" />
          </figure>
          <div className="p-2">
            <h2 className=" font-bold flex gap-2">
              {bookName}
              <div className="badge bg-blue-100 text-xs">{bookType}</div>
            </h2>
            <div>
              <p className="text-sm font-libra py-2">By : {bookAuthor}</p>
              <p className="text-xs font-libra py-2">Publisher : {publisher}</p>
              <p className="text-xs font-libra pb-2">Date : {publishingdate}</p>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Book
