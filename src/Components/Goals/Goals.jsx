import React from 'react'
import { useNavigate } from 'react-router-dom';

function Goals({ setpCond,current }) {
  const navigate = useNavigate()

  if (current !==2) {
    navigate("/")
  }
  
  return (
    <div className=' goalsBody'>
      <div className="fixed top-0 left-0 progresseBar z-10   bg-gray-300  flex h-3 w-full " style={ { borderRadius: "20px" } }>
        <div className="toProgress  bg-[#4CAF50] w-1/3"
          style={ { borderRadius: "20px" } }></div >
        <div className="onProgress bg-inherit w-2/3"
          style={ { borderTopRightRadius: "50px", borderBottomRightRadius: "50px" } }></div>
      </div>
      <div className="title text-[#4CAF50] text-5xl ">
        A quel niveau pratiquez vous du sport?
      </div>
      <div className="message mt-10 mb-16 text-sm">Pour une meilleur experience et un plan preparer pour vous, selectectionnez votre niveau quotidien d
        exercise.</div>

      <div className="choices flex flex-col justify-center align-middle gap-10 w-full">
        <button id='op1' className="choice  p-5 bg-[#333333]
        text-[white]" style={ { borderRadius: "20px" } } onClick={ () => {
            setpCond("peu"); document.getElementById("btr").style.opacity = 1
            document.getElementById("op1").style.border = "5px solid #4CAF50"
            document.getElementById("op2").style.border = "none"
            document.getElementById("op3").style.border = "none"
          } }>Pas assez</button>
        <button id='op2' className="choice  p-5 bg-[#333333]
        text-[white]" style={ { borderRadius: "20px" } } onClick={ () => {
            setpCond("assez"); document.getElementById("btr").style.opacity = 1
            document.getElementById("op1").style.border = "none"
            document.getElementById("op2").style.border = "5px solid #4CAF50"
            document.getElementById("op3").style.border = "none"
          } }>Suffisamment</button>
        <button id='op3' className="choice  p-5 bg-[#333333]
        text-[white]" style={ { borderRadius: "20px" } } onClick={ () => {
            setpCond("beaucoup"); document.getElementById("btr").style.opacity = 1
            document.getElementById("op1").style.border = "none"
            document.getElementById("op2").style.border = "none"
            document.getElementById("op3").style.border = "5px solid #4CAF50"
          } }>Intensemment</button>
      </div>
    </div>
  )
}

export default Goals