import React from 'react'

function SignUp() {
    return (
        <div className="w-[98vw] h-full fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-white rounded-lg shadow-md p-6">
            <h2 class="text-3xl text-center font-bold text-[#4CAF50] mb-4">Bienvenue sur wellth</h2>

            <form className="flex flex-col">
                <input type="text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Full Name" />
                <input type="email" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email" />
                <input type="number" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Phone Number" />
                <input type="text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Company Name" />
                <input type="text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Job Title" />
                <input type="date" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Date of Birth" />
                <textarea name="message" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Message"></textarea>

                <button type="submit" className="bg-gradient-to-r from-[#4CAF50] to-[#3f8044] text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-black transition ease-in-out duration-150">S'inscrire</button>
            </form>
        </div>

    )
}

export default SignUp