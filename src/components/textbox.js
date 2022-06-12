import React, { useState } from 'react'
import '../form.css';
import LtU from "../img/ltu.png"
import UtL from "../img/UtL.png"
import pvpng from "../img/previewicon.png"



export default function Textbox() {

    const lowerToUpper = () => {
        console.log("Lower to Upper Transform");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const checkOnChange = (event) => {
        console.log("On Change fire");
        setText(event.target.value);
    }

    const upperToLower = () => {
        let newText2 = text.toLowerCase();
        setText(newText2)
    }

    const [text, setText] = useState("")

    return (

        <>
            <div className="fmain">
                <div className="tophead">
                <h3 className='heading'> &#x0174;rite &amp; &#xc2;nalysis 	&#9997; </h3>
                </div>
                <textarea value={text} onChange={checkOnChange} autoFocus name="" id="" cols="100" rows="12"></textarea>
                <p className='Info Info-1'>1. Numbers of Character (Including Spaces ) &rarr; &#9889;<b>{text.length}</b> .</p>
                <p className='Info'>2. Numbers of Character &rarr; &#9889;<b>{text.length - (text.split(" ").length - 1)}</b> .</p>
                <p className='Info'>3. Numbers of Word (Including Spaces ) &rarr; &#9889;<b>{text.split(" ").length - 1}</b> .</p>
                <p className='Info Info-4'>4. Numbers of Sentences &rarr; &#9889;<b>{text.split(". ").length - 1}</b> .</p>
                <p className='Info Info-4'>5. Avg Reading Speed &rarr; &#9889;<b> {(0.008 * text.split(" ").length).toFixed(2)} min</b>.</p>
            </div>

            <button onClick={lowerToUpper} className='Primary-btn btn-1'><img src={LtU} alt="" /></button>

            <button onClick={upperToLower} className='Primary-btn'><img src={UtL} alt="" /></button>

            <button className='Primary-btn btn-spl'><img src={pvpng} alt="" /> <span id='Previews'>Preview</span></button>

           
            <div className="model-container" id='modelBox'>
                <div className="model">
                    <h1 className="model-head" >Contant Preview </h1>
                    <p id='print_contant' >{text}</p>
                    <button id="close-btn">Close</button>
                </div>
            </div>
  
        </>
    )

}

 
const Previewer = document.getElementsByClassName('Primary-btn')[2];
const closeBtn = document.getElementById('close-btn');
const ModelBox = document.getElementById('modelBox')

console.log('Time')

if(closeBtn ){

    Previewer.addEventListener('click', () => {
        ModelBox.classList.add('show');
    })
    
    closeBtn.addEventListener('click', ()=>{
        ModelBox.classList.remove('show');
    })

}




