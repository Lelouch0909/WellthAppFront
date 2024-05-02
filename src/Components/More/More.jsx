import React, { useState } from 'react'

function More({ setIden, setPoids, setTaille, setRisques, poids, taille, risques }) {
  let [age, setAge] = useState(18)
  return (
    <div className='moreBody'>
      <div className="progresseBar  bg-[#FFEAEE] flex h-3 w-full " style={ { borderRadius: "20px" } }>
        <div className="toProgress  bg-[#4CAF50] w-4/5"
          style={ { borderRadius: "20px" } }></div >
        <div className="onProgress bg-inherit w-1/5"
          style={ { borderTopRightRadius: "50px", borderBottomRightRadius: "50px" } }></div>
      </div>
      <div className="title mt-16 text-[#FF5252] text-5xl ">
        A propos de vous
      </div>
      <div className="message mt-12 mb-16 text-3xl text-center text-[#2196F3]">Comment vous identifiez vous?</div>

      <div className="choices flex flex-col justify-center align-middle gap-10 w-full">
        <button id='om1' className="choice  p-5 bg-[#333333]
        text-[white]" style={ { borderRadius: "20px" } } onClick={ () => {
            setIden("homme");
            document.getElementById("om1").style.border = "5px solid #4CAF50"
            document.getElementById("om2").style.border = "none"

          } }>Homme</button>
        <button id='om2' className="choice  p-5 bg-[#333333]
        text-[white]" style={ { borderRadius: "20px" } } onClick={ () => {
            setIden("femme");
            document.getElementById("om2").style.border = "5px solid #4CAF50"
            document.getElementById("om1").style.border = "none"
          } }>Femme</button>
      </div>

      <div className="">
        <div className="text-2xl  text-[#2196F3] mt-14 mb-8 text-center">Quel age avez vous</div>
        <div className="flex gap-8 justify-center">
          <input type="range" className='w-3/5 ' min={ 15 } max={ 80 } value={ age } onChange={
            (e) => {
              setAge(e.target.value)
            }
          } />
          <div className="">{ age } Ans</div>
        </div>
      </div>

      <div className="menstrue flex justify-between my-14">
        <div className="text-2xl  text-[#2196F3]">Poids</div>
        <div className="flex  justify-around gap-2">
          <div className="flex flex-col gap-2">
            <input type="text " className='w-16  text-2xl text-center' value={ poids } onChange={ (e) => { setPoids(e.target.value) } } />
            <div className="bg-[#4CAF50] w-16 h-[1px]"></div>
          </div>
          <div className="text-2xl ">Kg</div>
        </div>
      </div>

      <div className="menstrue flex justify-between my-14">
        <div className="text-2xl  text-[#2196F3]">Taille</div>
        <div className="flex  justify-around gap-2">
          <div className="flex flex-col gap-2">
            <input type="text" className='w-16 text-2xl text-center' value={ taille } onChange={ (e) => { setTaille(e.target.value) } } />
            <div className="bg-[#4CAF50] w-16 h-[1px]"></div>
          </div>
          <div className="text-2xl ">M</div>
        </div>
      </div>

      <div className=" text-[#2196F3] text-3xl  m-8">Si vous avez des Antecedents Medicaux ou des Allergies; Merci de les preciser</div>
      <div className="w-full h-[56px] text-black text-center text-xl  flex  " >
        <input id='ch3' type="text" className='text-center w-4/5 border-[1px] ' value={ risques } onChange={ (e) => { setRisques(e.target.value) } } style={ { borderRadius: "32px", color: "#333333", borderColor: "#333333", borderTopRightRadius: "0", borderBottomRightRadius: "0px" } } />
        <button className='  border-[1px] w-1/5 '
          style={ { borderTopRightRadius: "32px", color: "#333333", borderColor: "#333333", borderBottomRightRadius: "32px" } } onClick={ () => {
            let choice = document.getElementById("ch3")
            let show = document.getElementById("choice")
            console.log(show.value);
            show.innerText = show.value + ", " + choice.value
            choice.value = ""
          } }>Add</button>
      </div>

      <div id='choice' className="userChoice my-8 mt-2 pl-4" value=""></div>
    </div >
  )
}

export default More