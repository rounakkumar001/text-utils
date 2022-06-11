import React, { useState } from 'react'
import '../form.css';
import LtU from "../img/ltu.png"
import UtL from "../img/UtL.png"


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
                <h3 className='heading'> &#x0174;rite &amp; &#xc2;nalysis 	&#9997;</h3>
                <textarea value={text} onChange={checkOnChange} autoFocus name="" id="" cols="100" rows="12"></textarea>
                <p className='Info Info-1'>1. Numbers of Character (Including Spaces ) &rarr; &#9889;<b>{text.length}</b> .</p>
                <p className='Info'>2. Numbers of Character &rarr; &#9889;<b>{text.length - (text.split(" ").length - 1)}</b> .</p>
                <p className='Info'>3. Numbers of Word (Including Spaces ) &rarr; &#9889;<b>{text.split(" ").length - 1}</b> .</p>
                <p className='Info Info-4'>4. Numbers of Sentences &rarr; &#9889;<b>{text.split(". ").length - 1}</b> .</p>
                <p className='Info Info-4'>5. Avg Reading Speed &rarr; &#9889;<b> {(0.008 * text.split(" ").length).toFixed(2) } min</b>.</p>
            </div>
            <button onClick={lowerToUpper} className='Primary-btn btn-1'><img src={LtU} alt="" /></button>
            <button onClick={upperToLower} className='Primary-btn'><img src={UtL} alt="" /></button>

        </>
    )
}
