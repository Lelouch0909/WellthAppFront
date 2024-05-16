import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'
import { document } from 'postcss';

var Vnom = false;
var Vprenom = false;
var Vmail = false;
var Vmp = false;
var Vmp2 = false

function SignUp() {
    const navigate = useNavigate()
    let [nom, setNom] = useState()
    let [prenom, setPrenom] = useState()
    let [mail, setMail] = useState()
    let [password, setPassword] = useState()
    let [Cpassword, setCpassword] = useState()
    let [pFile, setpFile] = useState()
    let [pName, setpName] = useState()

    let fileInput = useRef()
    let bgTof = useRef()
    let message = useRef()
    let b_mp = useRef()
    let b_mp2 = useRef()
    let b_nom = useRef()
    let b_prenom = useRef()
    let b_mail = useRef()
    let b_mpM = useRef()
    let b_mp2M = useRef()
    let b_nomM = useRef()
    let b_prenomM = useRef()
    let b_mailM = useRef()

    const [uploading, setUploading] = useState(false)



    const handleImageChange = (event) => {
        setUploading(true)
        setpFile(fileInput.current.value)
        setpName(fileInput.current.name)
        console.log(fileInput.current.value);

        const reader = new FileReader()
        reader.onload = function () {
            bgTof.current.style.background = "url( " + reader.result + ") center center / cover no-repeat"
        }

        reader.readAsDataURL(fileInput.current.files[0])

        setUploading(false)

    }



    return (
        <div className="w-[100vw]  h-[100vh]   bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold mt-8 mb-8 text-[#1e0e4b] text-center">Bienvenue sur <span className="text-[#4CAF50]">Wellth</span></div>
            <div className="text-3sm font-normal mb-4 text-center text-[#1e0e4b]">Creez un compte </div>

            <form className="flex flex-col ">
                <input type="text" id='nom' name='nom' ref={ b_nom } className="bg-gray-100 text-gray-800 border-0 rounded-md p-2  h-11 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Nom" value={ nom } onChange={ (e) => {
                    setNom(e.target.value)
                    verifie(b_nom.current, b_nomM.current)
                } }
                />
                <div className="text-xs text-center mb-3 text-[#FF5252]" id='nomM' ref={ b_nomM }></div>

                <input type="text" id='prenom' ref={ b_prenom } className="bg-gray-100 text-gray-800 border-0 rounded-md p-2  h-11 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Prenom"
                    value={ prenom } onChange={ (e) => {
                        setPrenom(e.target.value)
                        verifie(b_prenom.current, b_prenomM.current)
                    } } />
                <div className="text-xs text-center mb-4 text-[#FF5252]" id='prenomM' ref={ b_prenomM }></div>

                <input type="email" id='mail' ref={ b_mail } className="bg-gray-100 text-gray-800 border-0 rounded-md p-2  h-11 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email"
                    value={ mail } onChange={ (e) => {
                        setMail(e.target.value)
                        verifie(b_mail.current, b_mailM.current)
                    } } />
                <div className="text-xs  text-center mb-4 text-[#FF5252]" ref={ b_mailM } id='mailM'></div>

                <input type="password" ref={ b_mp } id='password' className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 h-11 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Mot de passe"
                    value={ password } onChange={ (e) => {
                        setPassword(e.target.value)
                        verifie(b_mp.current, b_mpM.current)

                        if (e.target.value !== b_mp.current.value) {
                            b_mp2M.current.innerText = 'Les mots de passe ne sont pas identiques'
                            Vmp2 = false
                        }
                        else{
                            b_mp2M.current.innerText = ""
                            Vmp = true
                        }

                    } } />
                <div className="text-xs text-center mb-4 text-[#FF5252]" ref={ b_mpM } id='passwordM'></div>

                <input type="password" id='Cpassword' ref={ b_mp2 } className="bg-gray-100 text-gray-800 rounded-md p-2  h-11 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Confirmer le Mot de passe"
                    value={ Cpassword } onChange={ (e) => {
                        setCpassword(e.target.value)
                        if (e.target.value !== b_mp.current.value) {
                            b_mp2M.current.innerText = 'Les mots de passe ne sont pas identiques'
                            Vmp2 = false

                        }
                        else{
                            b_mp2M.current.innerText = ""
                            Vmp2 = true
                        }
                    } } />
                <div className="text-xs text-center mb-4 text-[#FF5252]" ref={ b_mp2M } id='CpasswordM'></div>

                <div className="flex text-center align-middle justify-center relative gap-4">
                    <label className="custum-file-upload" htmlFor="tof">
                        <div id='profilePIcon' className="icon" ref={ bgTof } >

                        </div>
                        <input type="file" id='tof' accept='image/*, .jpeg , .png , .jpg' ref={ fileInput } capture name="image" onChange={ handleImageChange }
                        />
                    </label>
                    <div className="translate-y-[2rem]">photo de profil</div>

                </div>
                <button type="button" className="bg-gradient-to-r from-[#4CAF50] to-[#3f8044] text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-black transition ease-in-out duration-150"
                    onClick={ () => {
                       
                        console.log();
                        if (Vnom == true &&
                            Vprenom == true &&
                            Vmail == true &&
                            Vmp == true && Vmp2 == true) {
                            message.current.innerText = "Nice!";

                            navigate("/home")

                        } else {
                            message.current.innerText = "Svp veuillez remplir correctement les champs";

                        }
                    } }>S'inscrire</button>
            </form>
            <div className="text-xs text-center m-4 text-[#FF5252]" ref={ message } id='message'></div>

            <div className="text-2sm text-center mt-[1.6rem]">Vous avez un compte? <a className="text-2sm text-[#2196F3]" onClick={ () => navigate("/signin") }>Connectez-vous!</a></div>

        </div>

    )
}
/**
 * 
 * @param {HTMLElement} element 
 */

function verifie(element, message) {
    var nom_controle = element.getAttribute('id')
    var ctr = element
    var long = ctr.value.length
    const setError = () => {
        element.style.border = "1px solid red !important"
    }
    const removeError = () => {
        element.style.borderColor = "#4CAF50"
    }

    if (nom_controle === 'mail') {
        const reg = /^([0-9a-zA-Z_.@]){0,100}$/
        if (ctr.value.indexOf('.') == -1 || !reg.test(ctr.value)) {
            setError()
            message.innerText = 'addresse mail non conforme (.,@) et pas d espace insecable'
            Vmail = false

        }
        else {
            removeError()
            message.innerText = ''

            Vmail = true
        }

    }
    else if (nom_controle === 'nom') {

        const reg = /^(?=.*[^ ])[0-9a-zA-Z_\s]{2,100}$/

        if (!reg.test(ctr.value)) {
            setError()
            message.innerText = 'entre 2 et 100 caracteres'

        }
        else {

            removeError()
            message.innerText = ''
            Vnom = true


        }
    } else if (nom_controle === 'prenom') {

        const reg = /^(?=.*[^ ])[0-9a-zA-Z_\s]{2,100}$/

        if (!reg.test(ctr.value)) {
            setError()
            message.innerText = 'entre 2 et 100 caracteres'

        }
        else {

            removeError()
            message.innerText = ''
            Vprenom = true


        }
    }
    else if (nom_controle === 'numero') {

        const reg = /^6(7|5|8|9|2)/
        let ff = parseInt(ctr.value)


        if (!reg.test(ctr.value) || ctr.value.length != 9 || !(parseInt(ctr.value) == ctr.value)) {
            setError()
            message.innerText = 'Commencer par un "6" suivis d un "8" "7" "5" ou "2" , un numero a 9 chiffres'
            Vnumero = false
        }
        else {
            removeError()
            message.innerText = ''
            Vnumero = true

        }
    }
    else if (nom_controle === 'password') {
        const reg = /[A-Z]/
        const reg2 = /[a-z]/
        const reg3 = /\d/

        if (!reg2.test(ctr.value) || !reg3.test(ctr.value) || !reg.test(ctr.value) || long < 9) {
            setError()
            message.innerText = 'Doit posseder au moins 9 caracteres dont 1 maj 1 min et 1 nombre'
            Vmp = false


        }
        else {

            removeError()
            message.innerText = ''
            Vmp = true


        }
    }


    else {
        removeError()
        switch (nom_controle) {
            case 'nom':

                Vnom = true
                break;

            case 'prenom':
                Vprenom = true
                break;

        }
    }
}


export default SignUp