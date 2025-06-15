import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './componants/Layouts/Root'
import ErrorPage from './componants/ErrorPage/ErrorPage'
import Home from './componants/Home/Home'
import Dashboard from './componants/Dashboard/Dashboard'
import BookDetail from './componants/BookDetail/BookDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'books/:id',
        element: <BookDetail> </BookDetail>,
        loader: () => fetch('/public/booksData.json'),
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
