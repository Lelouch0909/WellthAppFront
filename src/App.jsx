import React from 'react'
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Authentication from './Routes/Authentication/Authentication';
import Information from './Routes/Authentication/Information/Information';
import HomePage from './Routes/HomePage/HomePage';

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Authentication></Authentication>
  }
  ,
  {
    path: "/regime/create/*",
    element: <Information></Information>
  },
  {
    path: "/home",
    element: <HomePage></HomePage>
  }
])

function App() {
  return (
    <div className="App  ">
      <RouterProvider router={ router }>

      </RouterProvider>

    </div>
  );
}

export default App;
