import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../../Pages/HomePage/Home/Home'
import Main from '../../Layout/Main'
import Blogs from '../../Pages/Blogs/Blogs/Blogs'
import Login from '../../Pages/Login/Login'
import SignUp from '../../Pages/SignUp/SignUp'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])