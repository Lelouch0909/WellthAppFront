import { document } from "postcss"
import "./Loader1.css"
import React from "react"

function Loader1({ btr, btl}) {

    btl.current.class = "p-4 hidden"
    btr.current.innerText = "Please Wait..."


    return (
        <div className=" fixed  left-[50%]  top-[50%] translate-y-[-50%] translate-x-[-50%] ">
            <div className="newtons-cradle ">
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
            </div>
        </div>
    )

}

export default Loader1