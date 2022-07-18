import React, { useState } from 'react'
import '../form.css';
import LtU from "../img/ltu.png"
import UtL from "../img/UtL.png"
import pvpng from "../img/previewicon.png"
import Print from "../img/print.png"
import Copy from "../img/copy.png"
import Remove from "../img/remove.png"
import Speaker from "../img/speaker.png"
// import say from 'say';
import { useSpeechSynthesis } from 'react-speech-kit';




export default function Textbox() {


    const [text, setText] = useState("")
    
    const { speak } = useSpeechSynthesis();




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

    const clear = () => {
        setText("");
    }

    const copyText = () => {
        var Text = document.getElementById("contantBox");
        Text.select();
        navigator.clipboard.writeText(Text.value);
    }


    const RemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }


   

    return (

        <>
            <div className="fmain">
                <div className="tophead">
                    <h3 className='heading'> &#x0174;rite &amp; &#xc2;nalysis 	&#9997; </h3>
                </div>
                <textarea value={text} onChange={checkOnChange} autoFocus name="" id="contantBox" cols="100" rows="12"></textarea>
                <p className='Info Info-1'>1. Numbers of Character (Including Spaces ) &rarr; &#9889;<b>{text.length}</b> .</p>
                <p className='Info'>2. Numbers of Character &rarr; &#9889;<b>{text.length - (text.split(" ").length - 1)}</b> .</p>
                <p className='Info'>3. Numbers of Word &rarr; &#9889;<b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> .</p>
                <p className='Info Info-4'>4. Numbers of Sentences &rarr; &#9889;<b>{text.split(". ").length - 1}</b> .</p>
                <p className='Info Info-4'>5. Avg Reading Speed &rarr; &#9889;<b> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} min</b>.</p> 
            </div>


            <div className="model-container" id='modelBox'>
                <div className="model">
                    <h1 className="model-head" >Contant Preview </h1>
                    <p id='print_contant' >{text}</p>
                    <button id="close-btn" onClick={() => {
                        const ModelBox = document.getElementById('modelBox')
                        ModelBox.classList.remove('show');
                    }}>Close</button>
                </div>
            </div>

            <div className='btn-group'>
                <button onClick={lowerToUpper} className='Primary-btn btn-1'><img src={LtU} alt="" /></button>

                <button onClick={upperToLower} className='Primary-btn'><img src={UtL} alt="" /></button>



                <button className='Primary-btn btn-spl' onClick={() => {
                    if (text !== "") {
                        const ModelBox = document.getElementById('modelBox')
                        ModelBox.classList.add('show');
                    }
                    else {
                        alert("Please Write some contant then contant Previwe will be displayed !")
                    }
                }}><img src={pvpng} alt="" /> <span id='Previews'>Preview</span></button>


                <button onClick={RemoveExtraSpaces} className='Primary-btn btn-txt'> <img src={Remove} alt="" /> RemoveExtraSpaces</button>

                <button onClick={copyText} className='Primary-btn btn-txt'> <img src={Copy} alt="" /> Copy</button>

                <button onClick={() => speak({ text: text })} className='Primary-btn btn-txt'><img src={Speaker} alt="" /> Speak</button>

                

                <button onClick={clear} className='Primary-btn btn-txt'><i className="fa-solid fa-eraser"></i>Clear</button>


                <button onClick={() => {
                    const prmptValue = window.confirm("Have you Finished The work ?")

                    if (prmptValue === true) {
                        console.log(prmptValue);
                        const txtContant = text;
                        const bodyPrint = document.body.innerHTML;
                        document.body.innerHTML = txtContant;
                        window.print();
                        document.body.innerHTML = bodyPrint;
                    }


                }} className='Primary-btn'><img src={Print} alt="" /></button>

                

                
            
            </div>

        </>
    )

}




