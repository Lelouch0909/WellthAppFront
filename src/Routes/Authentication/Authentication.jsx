import React from 'react'
import SignIn from '../../Components/SignIn/SignIn'
import SignUp from '../../Components/SignUp/SignUp'
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from '../HomePage/HomePage';

function Authentication() {
  const navigate = useNavigate()
  let element;

  if (true) {
    element = <SignUp></SignUp>
  }
  else {
    element = <HomePage></HomePage>
  }
  

  return (
    <Routes>
      <Route path='/' element={ element}
      ></Route>
      <Route path='/signup' element={ <SignUp></SignUp>
      }></Route>
      <Route path='/signin' element={ <SignIn></SignIn> }
      ></Route>

    </Routes >)


}

export default Authentication