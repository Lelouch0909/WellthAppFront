import React, { useEffect, useRef } from 'react'
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
import Transition, { launchAnimate } from '../../Components/transition-2/Transition'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../Store/store'
import trash from '../../assets/svg/trash-change.svg'
import avatar from '../../assets/svg/avatar.svg'
import logout from '../../assets/svg/logOut.svg'
import close from '../../assets/svg/close-svgrepo-com.svg'
import { LOGOUT_USER_REQUEST } from '../../Store/Auth/ActionType'
import { getAllUserRegimes, getCurrentUserRegime } from '../../Store/Regime/Action'


function HomePage() {
  const { auth } = useSelector(store => store)
  const { regime } = useSelector(store => store)
  const dispatch = useDispatch()
  var navigate = useNavigate()

  const modal = useRef()
  const option = useRef()
  console.log(auth);
  var user = auth.user

  if (user == null) {
    dispatch({ type: LOGOUT_USER_REQUEST });
    navigate('/')
    user = {
      nom: "",
      prenom: "",
      photo: "",

    }
  }
  useEffect(() => {
    dispatch(getAllUserRegimes(auth.user.id))
    dispatch(getCurrentUserRegime(auth.user.id))
    
  }, [])
  /** Pas encore mis la fonction photo */
  let root;
  if (regime.regimeCurrent == null) {
    root = <div className="h-full w-full ">

      <div className="header  rounded-xl  flex absolute top-0 w-full  p-3 items-center justify-between  shadow-[0px_1px_10px_#333333]   " >
        <div className="avatar w-10 h-10 ml-2 object-cover">
          <img className='w-full h-full' srcSet={ user.photo ? user.photo : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" } alt="" />
        </div>
        <div className="nom text-xl text-[#3f8044]  "  >{ user.nom + " " }</div>
        <div className="more w-10 h-10  object-cover" onClick={ () => {
          option.current.style.display = "block"
          modal.current.style.display = "block"
        } }>
          <img className='w-full h-full ' srcSet={ more } alt="" />
        </div>
        <div ref={ modal } className="modal hidden absolute w-[100vw] h-[100vh] top-0 left-0 bg-white opacity-0 z-10" onClick={ () => {
          option.current.style.display = "none"
          modal.current.style.display = "none"
        } }>

        </div>
        <div ref={ option } className="  m-1 py-1 absolute right-0 bottom-[-10rem] rounded-lg   z-10 bg-white hidden ">
          <div className="p-2 m-2 flex gap-1 justify-center align-middle">Supprimer regime     <img className="w-5 h-5" alt="" srcset={ trash } />
          </div>
          <div className="h-[0.01rem] bg-black "></div>
          <div className="p-2 w-full m-2  flex gap-1 justify-center align-middle">Editer profile <img className="w-6 h-6" alt="" srcset={ avatar } />
          </div>
          <div className="h-[0.01rem] bg-black "></div>

          <div className="p-2 m-2  flex gap-1 justify-center align-middle" onClick={ () => {
            localStorage.setItem("jwt", null);
            dispatch({ type: LOGOUT_USER_REQUEST });
          }
          } >Se deconnecter <img className="w-6 h-6" alt="" srcset={ logout } />
          </div>           </div>
      </div>
      <div className="w-[100vw] h-[100vh] flex flex-col  items-center  justify-center align-middle">
        <div className="text text-2xl  m-3" style={ { animation: "appear 0.25s 0.2s both" } }>En avant !</div>
        <button className="bg-gradient-to-r from-[#4CAF50] to-[#3f8044] text-white font-bold py-2 px-4 rounded-md mt-0 hover:bg-green-600 hover:to-black transition ease-in-out duration-150 " onClick={ async () => {

          await launchAnimate()
          navigate("/regime/create")


        } } style={ { animation: "appear 0.25s 0.2s both" } }>Nouveau Regime</button>
      </div>
    </div>

  }
  else {
    root = <Home user={user} regime={regime.regimeCurrent}></Home>
  }
  return (
    <div className=' text-sm '>
      <Transition></Transition>
      <img srcSet={ bg } className=' w-full h-full object-cover absolute ' alt="" />
      <div className=" h-[100vh] overflow-scroll relative">
        <Routes>
          <Route path='/*' element={ root }
          ></Route>
          <Route path='/chat' element={ <Chat></Chat>
          }></Route>
          <Route path='/stat' element={ <Stat ></Stat> }
          ></Route>

        </Routes >
      </div>



      <div className="footer shadow-[0px_1px_10px_#333333]  rounded-t-xl  bg-white  items-center flex justify-around fixed bottom-0 left-0 z-10 w-full p-1 ">

        <div className="flex   justify-center flex-col  items-center " onClick={ () => navigate("/")
        }>

          <img srcSet={ home } className=' bg-[#4CAF50]  w-10 h-10  p-[0.5rem]  ' alt="" style={ { borderRadius: "50%" } } />
          <div className="w-14 h-2 mt-1 bg-[#4CAF50] rounded-xl"></div>
        </div>

        <div className=" flex   justify-center flex-col  items-center  " onClick={ () => navigate("/chat")
        }>
          <img srcSet={ chat } className=' bg-[#fff]  w-10 h-10  p-[0.5rem] ' alt="" style={ { borderRadius: "50%" } } />
        </div>
        <div className="flex   justify-center flex-col  items-center" onClick={ () => navigate("/stat")
        }>
          <img srcSet={ stat } className=' bg-[#fff] w-10 h-10   p-[0.5rem] ' alt="" style={ { borderRadius: "50%" } } />
        </div>


      </div>
    </div>
  )
}





export default HomePage