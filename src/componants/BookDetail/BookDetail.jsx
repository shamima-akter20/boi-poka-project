import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const BookDetail = () => {
  const { id } = useParams()
  const data = useLoaderData()
  const bookId = parseInt(id)

  // console.log(id)
  // console.log(data)

  const book = data.find((books) => books.id === bookId)
  console.log(book, bookId)

  const {
    // id: currentBookId,
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
    bookDetails,
  } = book

  const handleMarkAsRead = () => {}

  return (
    <div>
      <h2 className="text-center font-libra font-bold text-3xl pt-6">
        Book Details{' '}
      </h2>
      <div className="hero  min-h-170">
        <div className=" flex flex-center flex-col lg:flex-row">
          <div className="flex-1 px-6 justify-items-center ">
            <img src={image} className="h-130 w-90  rounded-lg shadow-2xl" />
          </div>
          <div className="flex-1 justify-center">
            <h1 className="text-4xl font-bold text-gray-700">{bookName}</h1>
            <p className="text-sm text-gray-700 py-3">By : {bookAuthor}</p>
            <hr className="my-2 border-gray-300" />
            <p className="text-xs text-gray-400">{bookType}</p>
            <hr className="my-2 border-gray-300" />
            <p className="py-2 text-sm text-gray-600 ">
              {' '}
              <span className="font-bold">Book Review</span> : {bookDetails}
            </p>
            <hr className="my-2 border-gray-300" />

            <div className="overflow-x-auto pb-4">
              <table className="table text-xs text-gray-600">
                {/* head */}

                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Number of page : </td>
                    <td>{totalpage}</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Year of publishing :</td>
                    <td>{publishingdate}</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td>Publisher :</td>
                    <td>{publisher}</td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <td>Rate : </td>
                    <td>{rating}</td>
                  </tr>
                  {/* row 5 */}
                  <tr>
                    <td>Category : </td>
                    <td>{category}</td>
                  </tr>
                  {/* row 6 */}
                  <tr>
                    <td>Review : </td>
                    <td>{review}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleMarkAsRead}
                className="btn btn-outline btn-primary"
              >
                Mark as Read
              </button>
              <button className="btn btn-primary">Add to Wish List</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetail
