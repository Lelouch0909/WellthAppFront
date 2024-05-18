import React from 'react'
import more from '../../assets/svg/more-vertical-svgrepo-com.svg'


function Home() {
  return (

    <div className="h-full w-full">

      <div className="header top-0 rounded-b-xl  flex absolute w-full  p-3 items-center justify-between  shadow-[0px_1px_10px_#333333]  my-1 " >
        <div className="avatar w-10 h-10 ml-2 object-cover">
          <img className='w-full h-full' srcSet="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
        </div>
        <div className="nom text-xl text-[#3f8044]  "  >Votre nom et Prenom</div>
        <div className="avatar w-10 h-10  object-cover">
          <img className='w-full h-full ' srcSet={ more } alt="" />
        </div>

      </div>
      <div className="w-[100vw] flex flex-col mt-24   items-center p-2  align-middle">

        <div className="flex justify-between w-full">
          <div className="">Objectif</div>

          <div className="flex flex-col w-full m-1">
            <div className="dessin w-2 h-2">
              <img src="" alt="" srcset="" />
            </div>
            <div className="trait h-1 bg-black rounded-sm"></div>
          </div>

          <div className="text-nowrap">XX kg</div>
        </div>
      </div>
    </div>
  )
}

export default Home