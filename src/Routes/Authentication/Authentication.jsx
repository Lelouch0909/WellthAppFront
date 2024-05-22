import React from 'react'
import SignIn from '../../Components/SignIn/SignIn'
import SignUp from '../../Components/SignUp/SignUp'
import { Route, Routes, useNavigate } from 'react-router-dom'

function Authentication() {
 

  return (
    <Routes>
      <Route path='/' element={  <SignUp></SignUp>}
      ></Route>
      <Route path='/signup' element={ <SignUp></SignUp>
      }></Route>
      <Route path='/signin' element={ <SignIn></SignIn> }
      ></Route>

    </Routes >)


}

export default Authentication