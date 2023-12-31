import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './component/Home.jsx';
import Login from './component/Login.jsx';
import Register from './component/Register.jsx';
import AuthProviders from './component/providers/AuthProviders.jsx';
import Orders from './component/Orders.jsx';
import PrivatesRoute from './component/routes/PrivatesRoute.jsx';
import Profile from './component/routes/Profile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path: '/orders',
        element: <PrivatesRoute><Orders></Orders></PrivatesRoute>
      },
      {
        path: '/profile',
        element: <PrivatesRoute><Profile></Profile></PrivatesRoute>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
       <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
