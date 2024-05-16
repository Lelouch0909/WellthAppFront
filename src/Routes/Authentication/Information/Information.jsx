import React, { useRef, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Expertise from '../../../Components/Expertise/Expertise'
import Goals from '../../../Components/Goals/Goals'
import More from '../../../Components/More/More'
import Loader1 from '../../../Components/Loader/Loader1'
import { document } from 'postcss'


function Information() {

  const navigation = { 1: "/regime/create/", 2: "/regime/create/goals", 3: "/regime/create/more" }
  const navigate = useNavigate()
  let [current, setCurrent] = useState(1)
  let [regimeObj, setObjectif] = useState("")
  let [cond, setpCond] = useState("")
  let [iden, setIden] = useState("")
  let [poids, setPoids] = useState("")
  let [taille, setTaille] = useState("")
  let [risques, setRisques] = useState("")
  let [active, setActive] = useState("")
  let [duree, setDuree] = useState(14)
  let [age, setAge] = useState(18)
  let btr = useRef()
  let btl = useRef()

  let param = {
    objectif: regimeObj,
    condPhysique: cond
  }
  function verifie() {
    if (iden !== "" && poids !== "" && taille !== "" && duree !== null && age !== null) {
      btr.current.style.opacity = 1
      return true
    }
    else return false
  }
  return (
    <div className='w-[100vw] relative h-[100vh] flex-col gap-1  pt-14 px-3  font-bold' style={ { animation: "appear 0.25s 0.2s both" } }>
      <div className="h-5/6 overflow-scroll hideScrollBar">
        <Routes>
          <Route path='/' element={ <Expertise setObjectif={ setObjectif } setActive={ setActive } active={ active } current={ current } btr={ btr } btl={ btl }></Expertise> }></Route>
          <Route path='/goals' element={ <Goals setpCond={ setpCond } current={ current } btr={ btr } btl={ btl }></Goals> }>
          </Route>
          <Route path='/more' element={ <More setIden={ setIden } poids={ poids } current={ current } taille={ taille } risques={ risques } age={ age } duree={ duree } setPoids={ setPoids } setTaille={ setTaille } setRisques={ setRisques } setAge={ setAge } setDuree={ setDuree } verifie={ verifie } btr={ btr } btl={ btl }></More>
          }></Route>
          <Route path='/loader' element={ <Loader1 btr={ btr } btl={ btl }></Loader1> }></Route>
        </Routes>
      </div>

      <div className=" fixed bottom-0 left-0 z-10 w-full">
        <div className="flex justify-center m-1 p-0 w-full">

          <button id='btl' ref={ btl } className='p-4  hidden' style={ { color: "#4CAF50" } } onClick={ () => {
            btr.current.style.opacity = 0.3

            switch (current) {
              case 2:
                setCurrent(1)
                setObjectif("")
                btr.current.innerText = "Suivant"

                btl.current.className = "p-4 hidden"

                navigate(navigation[1])


                break;
              case 3:
                setCurrent(2)
                setpCond("")
                btr.current.innerText = "Suivant"
                navigate(navigation[2])

                break;
              case 4:
                setCurrent(1)
                setpCond("")
                setObjectif("")

                btr.current.innerText = "Suivant"

                navigate("/regime/create/")

                break;
              default:
                setCurrent(1)
                navigate("/regime/create/")
                break;
            }

          }
          }>Precedent</button>



          <button id='btr' className='py-[20px] px-[5rem] ' ref={ btr } style={ { borderRadius: "25px", color: "#333333", background: "#4CAF50", opacity: 0.3 } } onClick={ () => {
            switch (current) {
              case 1:
                if (regimeObj !== "") {
                  console.log("----");
                  btr.current.style.opacity = 0.3
                  setCurrent(2)
                  btl.current.className = "p-4"
                  navigate(navigation[2])

                }
                break;



              case 2:
                if (cond !== "") {
                  console.log("----");
                  btr.current.style.opacity = 0.3
                  setCurrent(3)
                  btr.current.innerText = "Terminer"

                  navigate(navigation[3])

                }
                break;
              case 3:
                if (verifie) {
                  navigate("/regime/create/loader")
                  btl.current.className = "p-4 hidden"
                  btr.current.innerText = "Please Wait..."

                }
                
                //changer la classe d un element html

                break;

              default:
                setCurrent(1)
                navigate("/regime/create/")
                break;
            }
          }
          }>Suivant</button>
        </div>

      </div>

    </div>
  )
}

export default Information