import React, { useRef } from 'react'
import more from '../../assets/svg/more-vertical-svgrepo-com.svg'
import coureur from '../../assets/sticky/running-stick-figure-svgrepo-com.svg'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import './Home.css'
import { DateCalendar, LocalizationProvider, PickersDay } from '@mui/x-date-pickers'
import dayjs from 'dayjs';
import { Badge } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import pttDej from '../../assets/petit-dejeuner-cafe-croissants-frais.png'
import dej from '../../assets/dej.png'
import din from '../../assets/diner.png'
import trash from '../../assets/svg/trash-change.svg'
import avatar from '../../assets/svg/avatar.svg'
import logout from '../../assets/svg/logOut.svg'
import { LOGOUT_USER_REQUEST } from '../../Store/Auth/ActionType'
import valide from '../../assets/svg/ok-svgrepo-com.svg'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home() {
  const startDate = dayjs('2024-04-01'); // 01 Mars 2024
  const endDate = dayjs('2024-05-29');  // 29 Mars 2024
  const today = dayjs(Date.now());
  let [jourRegime, setJourRegime] = React.useState(0)
  let [kcal, setKcal] = React.useState(0)
  const modal = useRef()
  const option = useRef()
  const { auth } = useSelector(store => store)
  const { regime } = useSelector(store => store)
  const dispatch = useDispatch()
  var navigate = useNavigate()

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
  const renderDay = (props) => {
    const { day, selectedDates, DayComponentProps, pickersDayProps } = props;

    let badgeContent = '❓';
    let v = ''
    if (day.isBefore(today, 'day')) {
      badgeContent = '😡';
    } else if (day.isSame('2024-05-25', 'day')) {
      badgeContent = '🥳';
    }
    else if (day.isSame(today, 'day')) {
      badgeContent = '...';
      v = 'bg-[#4CAF50] opacity-90 rounded-[50%] '
    }

    return (
      <Badge
        key={ day.toString() }
        badgeContent={ badgeContent }
        className={ v }
        overlap="circular"
        anchorOrigin={ {
          vertical: 'top',
          horizontal: 'right',
        } }
      >
        <PickersDay  { ...DayComponentProps } outsideCurrentMonth={ false } day={ day } isFirstVisibleCell={ false } isLastVisibleCell={ false } onDaySelect={ () => { } } />
      </Badge>
    );
  };


  return (

    <div className="h-full w-full">

      <div className="header  rounded-xl  flex absolute top-0 w-full  p-3 items-center justify-between  shadow-[0px_1px_10px_#333333]   " >
        <div className="avatar w-10 h-10 ml-2 object-cover">
          <img className='w-full h-full' srcSet={ user.photo ? user.photo : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" } alt="" />
        </div>
        <div className="nom text-xl text-[#3f8044]  "  >{ user.nom + " " + user.prenom }</div>
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
      <div className="w-[100vw] flex flex-col mt-24   items-center p-2 gap-5 align-middle">

        <div className="flex align-middle items-center justify-between px-4 w-full gap-3">

          <div className="progress flex bg-white rounded-xl shadow-[0px_1px_10px_#333333]  flex-col w-full my-4 mx-1 border-x-8 border-l-[#FF5252] border-r-[#4CAF50] ">
            <div role='progressbar' className="dessin w-8 h-8 pt-1 translate-x-14">
              <img className='w-full h-full' srcset={ coureur } alt="" />
            </div>
          </div>

          <div className="text-nowrap">- 70 kg</div>
        </div>

        <div className="calendar w-full px-4 flex  justify-center">
          <LocalizationProvider dateAdapter={ AdapterDayjs }>
            <DateCalendar
              minDate={ startDate }
              maxDate={ endDate }
              readOnly
              value={ today }
              sx={ { padding: 0, width: '100%' } }
              //    renderDay={ renderDay }
              className=" calendar text-[#2196F3] rounded-xl "
              slots={ {
                day: renderDay,
                showDaysOutsideCurrentMonth: false,

              } }
              slotProps={ {
                day: (props) => renderDay(props),

              } }

            />
          </LocalizationProvider>        </div>
      </div>
      <div className="text-center text-sm text-[#2196F3]">Jour { jourRegime } du regime : { kcal } kcal</div>

      <div className="saviezVous my-12 mx-2">
        <div className="message">
          <div className="alert w-6 mx-4 rounded-[50%] bg-[#4CAF50] text-center text-white inline-block">!</div>
          Saviez-vous que votre regime est efficace ? consommer de la tomate permet Lorem ipsum dolor oremque facere quia.</div>
      </div>

      <div className="regimeDuJour my-8  ">
        <div className="title flex gap-8 justify-center">
          <div className="titleRegime text-center text-xl  text-[#2196F3]">🎯 Titre Alimentation Du jour</div>
          <div className=" suppAlimentation  ">
            <img className='  w-full h-7' alt="" srcset={ trash } />
          </div>
        </div>
        <Swiper slidesPerView={ 1 } grabCursor={ true } className='portfolio-slider'>
          <SwiperSlide >
            <div className="w-full p-6  flex m-1 justify-around align-middle items-center">
              <div className=" card w-1/2 flex flex-col gap-3 justify-center relative align-middle items-center ">
                <div className="nomAliment absolute top-0 m-2">Nom Aliment</div>
                <div className="source ">
                  <div className="  text-[#2196F3]">source</div>
                  <div className="underline">gogole</div>
                </div>
                <div className="source ">
                  <div className="  text-[#2196F3]">origine</div>
                  <div className="">origine</div>
                </div>
                <div className="source ">
                  <div className="  text-[#2196F3]">composition</div>
                  <div className="">composition</div>
                </div>

                <img className='absolute bottom-1 left-1 h-16 w-16 translate-x-[-50%] translate-y-[50%]' alt="" srcset={ pttDej } />
              </div>
              <div className="flex flex-col gap-8 text-[1.4rem]">
                <div className="delete">
                  <img className='h-8' alt="" srcset={ trash } /></div>
                <div className="ok">
                  <img className='h-8' alt="" srcset={ valide } /></div>
                <div className="timeLeft">-13h</div>

              </div>
            </div>
          </SwiperSlide><SwiperSlide >
            <div className="w-full p-6  flex m-1 justify-around align-middle items-center">
              <div className=" card w-1/2 flex flex-col gap-3 justify-center relative align-middle items-center ">
                <div className="nomAliment absolute top-0 m-2">Nom Aliment</div>
                <div className="source ">
                  <div className="  text-[#2196F3]">source</div>
                  <div className="underline">gogole</div>
                </div>
                <div className="source ">
                  <div className="  text-[#2196F3]">origine</div>
                  <div className="">origine</div>
                </div>
                <div className="source ">
                  <div className="  text-[#2196F3]">composition</div>
                  <div className="">composition</div>
                </div>
                <img className='absolute bottom-1 left-1 h-16 translate-x-[-50%] translate-y-[50%]' alt="" srcset={ dej } />

              </div>
              <div className="flex flex-col gap-8 text-[1.4rem]">
                <div className="delete">
                  <img className='h-8' alt="" srcset={ trash } /></div>
                <div className="ok">
                  <img className='h-8' alt="" srcset={ valide } /></div>
                <div className="timeLeft">-13h</div>

              </div>
            </div>
          </SwiperSlide><SwiperSlide >
            <div className="w-full p-6  flex m-1 justify-around align-middle items-center">
              <div className=" card w-1/2 flex flex-col gap-3 justify-center relative align-middle items-center ">
                <div className="nomAliment absolute top-0 m-2">Nom Aliment</div>
                <div className="source ">
                  <div className="  text-[#2196F3]">source</div>
                  <div className="underline">gogole</div>
                </div>
                <div className="source ">
                  <div className="  text-[#2196F3]">origine</div>
                  <div className="">origine</div>
                </div>
                <div className="source ">
                  <div className="  text-[#2196F3]">composition</div>
                  <div className="">composition</div>
                </div>
                <img className='absolute bottom-1 left-1 h-16 translate-x-[-50%] translate-y-[50%]' alt="" srcset={ din } />

              </div>
              <div className="flex flex-col gap-8 text-[1.4rem]">
                <div className="delete">
                  <img className='h-8' alt="" srcset={ trash } /></div>
                <div className="ok">
                  <img className='h-8' alt="" srcset={ valide } /></div>
                <div className="timeLeft">-13h</div>

              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>fff</div>
      <div className="footer h-16">
        pas vue
      </div>
    </div>
  )
}

export default Home