import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to Upercase","success")
    }
    const handleLoClick = () => {
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to Lowercase","success")
    }
    const handleClearClick = () => {
        let newText = ""
        setText(newText);
        props.showAlert("Clear TextForm","success")

    }
    const handleExtraSpaces = () => {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces reomoved","success")

    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(Text)
        props.showAlert("Copy to clipboard","success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [Text, setText] = useState("");
    return (
        <>
            <div className='my-5 container'>
                <h1>{props.heading}</h1>
                <div className="mb-3 ">
                    <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={Text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={Text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={Text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear text</button>
                <button disabled={Text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopyClick}>Copy text</button>
                <button disabled={Text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="caontainer my-3">
                <h1>Your text summery</h1>
                <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} chareters</p>
                <p>You can read this words in {0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} Mintues</p>
                <h2>Preview</h2>
                <p>{Text.length>0?Text:"Nothing To Priview"}</p>
            </div>
        </>
    )
}
