import React from 'react'
import './App.css';

import {  Router, RouterProvider, createBrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import Authentication from './Routes/Authentication/Authentication';
import Information from './Routes/Authentication/Information/Information';
import HomePage from './Routes/HomePage/HomePage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from './Store/store';
import { getUserProfile } from './Store/Auth/Action';
import Transition, { launchAnimate } from './Components/transition-2/Transition'



function App() {

  const jwt = localStorage.getItem('jwt');
  const { auth } = useSelector(store => store)
  const dispatch = useDispatch()
  useEffect(() => {

    if (jwt) {
      launchAnimate()
      dispatch(getUserProfile(jwt))

    } {

    }
  }, [auth.jwt])



  const router = createBrowserRouter([
    {
      path: "/*",
      element: auth.user ? <HomePage /> : <Authentication />
    }
    ,
    {
      path: "/regime/create/*",
      element: <Information></Information>
    },


  ])

  return (
      <div className="App">
        <Transition></Transition>

        <RouterProvider router={ router }>

        </RouterProvider>

      </div>

  );
}

export default App;
