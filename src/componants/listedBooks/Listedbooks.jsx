import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { getStoredReadtList } from '../../Utility/addToDB'
import Book from '../Books/Book'

const Listedbooks = () => {
  const allbooks = useLoaderData()
  const [readList, setReadList] = useState([])

  useEffect(() => {
    const storedReadList = getStoredReadtList()
    const storedReadListInt = storedReadList.map((id) => parseInt(id))
    // worst way
    console.log(storedReadList, storedReadListInt, allbooks)

    //
    const readBookList = allbooks.filter((book) =>
      storedReadListInt.includes(book.id)
    )

    setReadList(readBookList)
  }, [])

  return (
    <div>
      <h2 className="my-6 pt-10 text-4xl font-bold font-libra ">
        Listed Books
      </h2>

      <div>
        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
          </TabList>

          <TabPanel>
            <h2 className="text-2xl">Books I read : {readList.length}</h2>
            <h2>
              {readList.map((book) => (
                <Book key={book.id} book={book}></Book>
              ))}
            </h2>
          </TabPanel>
          <TabPanel>
            <h2 className="text-2xl">My Wish List</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default Listedbooks
