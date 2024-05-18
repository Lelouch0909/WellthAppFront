import React from 'react'
import more from '../../assets/svg/more-vertical-svgrepo-com.svg'
import home from '../../assets/svg/home.svg'
import chat from '../../assets/svg/comment.svg'
import stat from '../../assets/svg/Nouveau dossier/burger-menu-right-svgrepo-com.svg'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from '../../Components/Home/Home'
import Chat from '../../Components/Chat/Chat'
import Stat from '../../Components/Stat/Stat'
import bg from '../../assets/nordwood-themes-R53t-Tg6J4c-unsplash.jpg'
import "./styles.css";
import Transition, { handleClicked } from '../../Components/transition-2/Transition'

function HomePage() {
  var navigate = useNavigate()
  let root;
  if (false) {
    root = <div className="h-full w-full ">

      <div className="header  rounded-b-xl  flex absolute w-full  p-3 items-center justify-between  shadow-[0px_1px_10px_#333333]   " >
        <div className="avatar w-10 h-10 ml-2 object-cover">
          <img className='w-full h-full' srcSet="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
        </div>
        <div className="nom text-xl text-[#3f8044]  "  >Votre nom et Prenom</div>
        <div className="avatar w-10 h-10  object-cover">
          <img className='w-full h-full ' srcSet={ more } alt="" />
        </div>

      </div>
      <div className="w-[100vw] h-[100vh] flex flex-col  items-center  justify-center align-middle">
        <div className="text text-2xl  m-3" style={ { animation: "appear 0.25s 0.2s both" } }>En avant !</div>
        <button className="bg-gradient-to-r from-[#4CAF50] to-[#3f8044] text-white font-bold py-2 px-4 rounded-md mt-0 hover:bg-green-600 hover:to-black transition ease-in-out duration-150 " onClick={ () => {
          if (true) {
            handleClicked("/regime/create", navigate)
          }
        } } style={ { animation: "appear 0.25s 0.2s both" } }>Nouveau Regime</button>
      </div>
    </div>

  }
  else {
    root = <Home></Home>
  }
  return (
    <div className=' text-xl'>
      <Transition></Transition>
      <img srcSet={ bg } className=' w-full h-full object-cover absolute ' alt="" />
      <div className=" h-[100vh] overflow-scroll relative">
        <Routes>
          <Route path='/' element={ root }
          ></Route>
          <Route path='/chat' element={ <Chat></Chat>
          }></Route>
          <Route path='/stat' element={ <Stat ></Stat> }
          ></Route>

        </Routes >
      </div>



      <div className="footer shadow-[0px_1px_10px_#333333]  rounded-t-xl  bg-white  items-center flex justify-around fixed bottom-0 left-0 z-10 w-full p-1 ">

        <div className="flex   justify-center flex-col  items-center " onClick={ () => navigate("/home")
        }>

          <img srcSet={ home } className=' bg-[#4CAF50]  w-10 h-10  p-[0.5rem]  ' alt="" style={ { borderRadius: "50%" } } />
          <div className="w-14 h-2 mt-1 bg-[#4CAF50] rounded-xl"></div>
        </div>

        <div className=" flex   justify-center flex-col  items-center  " onClick={ () => navigate("/home/chat")
        }>
          <img srcSet={ chat } className=' bg-[#fff]  w-10 h-10  p-[0.5rem] ' alt="" style={ { borderRadius: "50%" } } />
        </div>
        <div className="flex   justify-center flex-col  items-center" onClick={ () => navigate("/home/stat")
        }>
          <img srcSet={ stat } className=' bg-[#fff] w-10 h-10   p-[0.5rem] ' alt="" style={ { borderRadius: "50%" } } />
        </div>


      </div>
    </div>
  )
}





export default HomePage