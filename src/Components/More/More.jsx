import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function More({ setIden, setPoids, setTaille, setRisques, poids, taille, risques, age, setAge, duree, setDuree, current, verifie, btr, btl, setHabitude ,aEviter, setaEviter}) {
  let [choice, setChoice] = useState("")
  let [choice2, setChoice2] = useState("")
  let [choice3, setChoice3] = useState("")

  let [text, setText] = useState("")
  let [text2, setText2] = useState("")
  let [text3, setText3] = useState("")
  const navigate = useNavigate()

  if (current !== 3) {
    navigate("/regime/create/")
  }
  return (
    <div className='moreBody'>
      <div className="progresseBar z-10  fixed top-0 left-0 bg-gray-300  flex h-3 w-full " style={ { borderRadius: "20px" } }>
        <div className="toProgress  bg-[#4CAF50] w-4/5"
          style={ { borderRadius: "20px" } }></div >
        <div className="onProgress bg-inherit w-1/5"
          style={ { borderTopRightRadius: "50px", borderBottomRightRadius: "50px" } }></div>
      </div>
      <div className="title  text-[#4CAF50] text-5xl ">
        A propos de vous
      </div>
      <div className="message mt-12 mb-16 text-3xl text-center text-[#2196F3]">Comment vous identifiez vous?</div>

      <div className="choices flex flex-col justify-center align-middle gap-10 w-full">
        <button id='om1' className="choice  p-5 bg-[#333333]
        text-[white]" style={ { borderRadius: "20px" } } onClick={ () => {
            setIden("homme");
            document.getElementById("om1").style.border = "5px solid #4CAF50"
            document.getElementById("om2").style.border = "none"
            verifie()

          } }>Homme</button>
        <button id='om2' className="choice  p-5 bg-[#333333]
        text-[white]" style={ { borderRadius: "20px" } } onClick={ () => {
            setIden("femme");
            document.getElementById("om2").style.border = "5px solid #4CAF50"
            document.getElementById("om1").style.border = "none"
            verifie()

          } }>Femme</button>
      </div>

      <div className="">
        <div className="text-2xl  text-[#2196F3] mt-14 mb-8 text-center">Quel age avez vous ?</div>
        <div className="flex gap-8 justify-center">
          <input required type="range" className='w-3/5 ' min={ 15 } max={ 80 } value={ age } onChange={
            (e) => {
              setAge(e.target.value)
              verifie()

            }
          } />
          <div className="">{ age } Ans</div>
        </div>
      </div>

      <div className="">
        <div className="text-2xl  text-[#2196F3] mt-14 mb-8 text-center">Vous voulez un regime sous combien de jours ?</div>
        <div className="flex gap-8 justify-center">
          <input required type="range" className='w-3/5 ' min={ 14 } max={ 90 } value={ duree } onChange={
            (e) => {
              setDuree(e.target.value)

              verifie()
            }
          } />
          <div className="">{ duree } Jours</div>
        </div>
      </div>

      <div className="menstrue flex justify-between my-14">
        <div className="text-2xl  text-[#2196F3]">Poids</div>
        <div className="flex  justify-around gap-2">
          <div className="flex flex-col gap-2">
            <input required type="number" className='w-16  text-2xl text-center' value={ poids } onChange={ (e) => {
              setPoids(e.target.value)
              verifie()

              if (e.target.value < 20 || e.target.value > 200) {
                document.getElementById("rm1").style.background = "red"

              }
              if (e.target.value >= 20 && e.target.value <= 200) {
                document.getElementById("rm1").style.background = "#4CAF50"

              }
              verifie()

            } } />
            <div id='rm1' className="bg-[#333333] w-16 h-[1px]"></div>
          </div>
          <div className="text-2xl ">Kg</div>
        </div>
      </div>

      <div className="menstrue flex justify-between my-14">
        <div className="text-2xl  text-[#2196F3]">Taille</div>
        <div className="flex  justify-around gap-2">
          <div className="flex flex-col gap-2">
            <input required type="number" max={ 3 } min={ 0.5 } className='w-16 text-2xl text-center' value={ taille } onChange={ (e) => {
              setTaille(e.target.value)
              verifie()

              if (e.target.value < 0.5 || e.target.value > 2.5) {
                document.getElementById("rm2").style.background = "red"

              }
              if (e.target.value >= 0.5 && e.target.value <= 2.5) {
                document.getElementById("rm2").style.background = "#4CAF50"

              }
              verifie()

            } } />
            <div id='rm2' className="bg-[#333333] w-16 h-[1px]"></div>
          </div>
          <div className="text-2xl ">M</div>
        </div>
      </div>

      <div className=" text-[#2196F3] text-xl  m-8">Si vous avez des Antecedents Medicaux ou des Allergies; Merci de les preciser</div>
      <div className="w-full h-[56px] text-black text-center text-xl  flex  " >
        <input id='ch3' type="text" className='text-center w-4/5 border-[1px]  active:border-none' value={ text } onChange={ (e) => {
          setText(e.target.value)
          verifie()
        } } style={ { borderRadius: "32px", color: "#333333", borderColor: "#333333", borderTopRightRadius: "0", borderBottomRightRadius: "0px" } } />
        <button className='  border-[1px] w-1/5 '
          style={ { borderTopRightRadius: "32px", color: "#333333", borderColor: "#333333", borderBottomRightRadius: "32px" } } onClick={ () => {
            let put = document.getElementById("ch3")
            choice === "" ? setChoice(put.value) : setChoice(choice + "; " + put.value)
            setRisques(choice)
            setText("")
          } }>Add</button>
      </div>

      <div id='choice' className="w-full  text-xl userChoice my-8 my-3 pl-4" value={ choice } >{ choice }</div>


      <div className=" text-[#2196F3] text-xl  m-8">Si vous aviez des aliments habituellement consomme; Merci de les preciser</div>
      <div className="w-full h-[56px] text-black text-center text-xl  flex  " >
        <input id='ch4' type="text" className='text-center w-4/5 border-[1px]  active:border-none' value={ text2 } onChange={ (e) => {
          setText2(e.target.value)
          verifie()
        } } style={ { borderRadius: "32px", color: "#333333", borderColor: "#333333", borderTopRightRadius: "0", borderBottomRightRadius: "0px" } } />
        <button className='  border-[1px] w-1/5 '
          style={ { borderTopRightRadius: "32px", color: "#333333", borderColor: "#333333", borderBottomRightRadius: "32px" } } onClick={ () => {
            let put = document.getElementById("ch4")
            choice2 === "" ? setChoice2(put.value) : setChoice2(choice2 + "; " + put.value)
            setHabitude(choice2)
            setText2("")
          } }>Add</button>
      </div>

      <div id='choice2' className="w-full  text-xl userChoice my-8 my-3 pl-4" value={ choice2 } >{ choice2 }</div>



      <div className=" text-[#2196F3] text-xl  m-8">Si vous aviez des aliments aue vous souhaitez eviter; Merci de les preciser</div>
      <div className="w-full h-[56px] text-black text-center text-xl  flex  " >
        <input id='ch5' type="text" className='text-center w-4/5 border-[1px]  active:border-none' value={ text3 } onChange={ (e) => {
          setText3(e.target.value)
          verifie()
        } } style={ { borderRadius: "32px", color: "#333333", borderColor: "#333333", borderTopRightRadius: "0", borderBottomRightRadius: "0px" } } />
        <button className='  border-[1px] w-1/5 '
          style={ { borderTopRightRadius: "32px", color: "#333333", borderColor: "#333333", borderBottomRightRadius: "32px" } } onClick={ () => {
            let put = document.getElementById("ch5")
            choice3 === "" ? setChoice3(put.value) : setChoice3(choice3 + "; " + put.value)
            setaEviter(choice3)
            setText3("")
          } }>Add</button>
      </div>

      <div id='choice3' className="w-full  text-xl userChoice my-8 my-3 pl-4" value={ choice3 } >{ choice3 }</div>
    </div >
  )
}

export default More