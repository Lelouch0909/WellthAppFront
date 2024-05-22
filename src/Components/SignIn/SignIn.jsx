import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../Store/Auth/Action';
import { LOGIN_USER_SUCCESS } from '../../Store/Auth/ActionType';

function SignIn() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    let [mail, setMail] = useState('')
    let [password, setPassword] = useState('')
    let logError = useRef()

    return (
        <div>
            <div className="max-w-md relative flex flex-col gap-8 p-4 rounded-md text-black bg-white">
                <div className="text-3xl font-bold mt-8 mb-0 text-[#1e0e4b] text-center">Bon retour sur <span className="text-[#4CAF50]">Wellth</span></div>
                <div className="text-3sm font-normal mb-4 text-center text-[#1e0e4b]">Connectez-vous a votre compte</div>
                <form className="flex flex-col gap-8" >
                    <div className="block relative">
                        <label htmlFor="email" className="block text-gray-600 cursor-text text-2sm leading-[140%] font-normal mb-2"
                        >Email</label>
                        <input type="email" name="mail" id="mail" className="focus:bg-gray-200 focus:outline-none focus:ring-1 bg-gray-100 focus:ring-blue-500 transition ease-in-out duration-150 rounded border border-gray-200 text-2sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-2  ring-offset-2  ring-gray-900 outline-0" value={ mail }
                            placeholder="xxx@example.gmail"
                            onChange={ (e) => {
                                setMail(e.target.value)
                            } } />

                    </div>
                    <div className="block relative">
                        <label htmlFor="password" className="block text-gray-600 cursor-text text-2sm leading-[140%] font-normal mb-2">Password</label>
                        <input type="password" id="password" className="focus:bg-gray-200 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 rounded border border-gray-200 text-2sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-2 ring-offset-2 ring-gray-900 outline-0"
                            name="password" placeholder="********" value={ password }
                            onChange={ (e) => {
                                setPassword(e.target.value)
                            } } />

                    </div>
                    <div>
                        <a className="text-2sm text-[#2196F3]" href="#">Forgot your password?
                        </a></div>
                    <div className="m-0 text-[0.7rem]  text-[#ff5252] text-center" ref={ logError }></div>
                    <input type='button' className="bg-gradient-to-r from-[#4CAF50] to-[#3f8044] text-white font-bold py-2 px-4 rounded-md mt-0 hover:bg-green-600 hover:to-black transition ease-in-out duration-150" onClick={ () => {

                        try {
                            dispatch(loginUser({ email: mail, motDePasse: password }))

                        } catch (error) {
                            console.log(1111111111111111);
                            logError.current.innerText = "impossible de se connecter! verifiez vos identifiants."

                        }



                    } } value="Se connecter" />

                </form>
                <div className="text-2sm text-center mt-[1.6rem]">Pas de compte? <a className="text-sm text-[#2196F3]" onClick={ () => navigate("/signup") }>Creez un compte, C'est gratuit !</a></div>
            </div>
        </div>
    )
}

export default SignIn