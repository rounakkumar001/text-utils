import React from 'react'
import logo from "../img/whitegithub.png"
import "../App.css"

export default function Heading() {
    return (
        <div id="main">
            <div className="logo">
                <div className="t">&#x0164;</div>
                <div className="rs">ext&#x01B2;tils <span className="vLine">|</span></div>
            </div>
           <a href="https://github.com/BhardwajRohan"> <img id="cat" src={logo} alt="" /> </a>  
        </div>
    )
}

