import React from 'react'
import logo from "../img/github-logo.png"
import "../App.css"


export default function Heading() {
    return (
        <div id="main">
            <div className="logo">
                <div className="t">T</div>
                <div className="rs">extutils <span className="vLine">|</span></div>
            </div>

           <a href="https://www.google.com"> <img id="cat" src={logo} alt="" /> </a> 
            
        </div>
    )
}

