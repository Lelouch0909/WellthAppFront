import React from 'react'
import { useNavigate } from 'react-router-dom';

function Expertise({ setObjectif, setActive, current }) {
    const navigate = useNavigate()

    if (current !==1) {
        navigate("/")
      }
    return (

        <div className="expertiveBody">
            <div className="progresseBar z-10  fixed top-0 left-0 bg-gray-300 flex h-3 w-full " style={ { borderRadius: "20px" } }>
                <div className="toProgress  bg-[#4CAF50] w-1/4"
                    style={ { borderRadius: "20px" } }></div>
                <div className="onProgress bg-inherit w-3/4"
                    style={ { borderTopRightRadius: "50px", borderBottomRightRadius: "50px" } }></div>
            </div>
            <div className=" title  text-[#4CAF50] text-5xl ">
                Quel est votre objectif?
            </div>
            <div className="message mt-10 mb-16 text-sm">Avant tout, Dites nous quel est votre objectif.</div>

            <div className="choices flex flex-col justify-center align-middle gap-10 w-full">
                <button id='ot1' className="choice  p-5 bg-[#333333]
        text-[white]" style={ { borderRadius: "20px" } } onClick={ (event) => {
                        setObjectif("Prendre_Poids");
                        document.getElementById("btr").style.opacity = 1
                        document.getElementById("ot1").style.border = "5px solid #4CAF50"
                        document.getElementById("ot2").style.border = "none"
                        document.getElementById("ot3").style.border = "none"
                        setActive('ot1')
                    } }>Gagner du poids
                </button>

                <button id='ot2' className="choice  p-5 bg-[#333333]
        text-[white]" style={ { borderRadius: "20px" } } onClick={ () => {
                        setObjectif("Maintenir_Poids");
                        document.getElementById("btr").style.opacity = 1
                        document.getElementById("ot1").style.border = "none"
                        document.getElementById("ot2").style.border = "5px solid #4CAF50"
                        document.getElementById("ot3").style.border = "none"
                        setActive('ot2')

                    } }> Maintenir du poids
                </button>

                <button id='ot3' className="choice   p-5 bg-[#333333]
        text-[white]" style={ { borderRadius: "20px" } } onClick={ () => {
                        setObjectif("Perdre_Poids");
                        document.getElementById("btr").style.opacity = 1
                        document.getElementById("ot1").style.border = "none"
                        document.getElementById("ot2").style.border = "none"
                        document.getElementById("ot3").style.border = "5px solid #4CAF50"
                        setActive('ot3')

                    } }> Perdre du poids
                </button>
            </div>
        </div>
        
    )
}

export default Expertise