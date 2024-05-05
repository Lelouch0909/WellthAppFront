import React from 'react'
import { useNavigate } from 'react-router-dom'


function SignIn() {
    const navigate = useNavigate()


    return (
        <div>
            <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
                <div className="text-3xl font-bold mt-8 mb-2 text-[#1e0e4b] text-center">Bon retour sur <span className="text-[#4CAF50]">Wellth</span></div>
                <div className="text-3sm font-normal mb-4 text-center text-[#2196F3]">Connectez vous a votre compte</div>
                <form className="flex flex-col gap-8">
                    <div className="block relative">
                        <label htmlFor="email" className="block text-[gray-600] cursor-text text-2sm leading-[140%] font-normal mb-2">Email</label>
                        <input type="text" id="email" className="rounded border border-gray-200 text-2sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />

                    </div>
                    <div className="block relative">
                        <label htmlFor="password" className="block text-gray-600 cursor-text text-2sm leading-[140%] font-normal mb-2">Password</label>
                        <input type="text" id="password" className="rounded border border-gray-200 text-2sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />

                    </div>
                    <div>
                        <a className="text-2sm text-[#7747ff]" href="#">Forgot your password?
                        </a></div>
                    <button type="submit" className="bg-[#4CAF50] w-max m-auto px-6 py-2 rounded text-white text-2sm font-normal">Submit</button>

                </form>
                <div className="text-2sm text-center mt-[1.6rem]">Don’t have an account yet? <a className="text-sm text-[#7747ff]" onClick={ () => navigate("/signup") }>Sign up for free!</a></div>
            </div>
        </div>
    )
}

export default SignIn