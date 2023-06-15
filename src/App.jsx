import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes/Routes'
// import './App.css'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
