import React, {useState} from 'react'
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
    const upperToLower = () =>{
        let newText2 = text.toLowerCase();
        setText(newText2)
    }

    const [text, setText] = useState(" ")

    return (
        <>
            <div className="fmain">
                <textarea value={text} onChange={checkOnChange} autoFocus name="" id="" cols="100" rows="12"></textarea>
            </div>
            <button onClick={lowerToUpper} className='Primary-btn'><img src={LtU} alt="" /></button>
            <button onClick={upperToLower} className='Primary-btn'><img src={UtL} alt="" /></button>

        </>
    )
}
