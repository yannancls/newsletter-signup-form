import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SuccessPage from './pages/SuccessPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<MainPage />}/>
      <Route path='/subscribed' element={<SuccessPage />}/>
    </>
  ),
  {
    basename: '/newsletter-signup-form'
  }
)

const App = () => {
  return <RouterProvider router={router}/>
}

export default App