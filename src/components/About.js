import React from 'react'



function About(props) {
   
    let myStyle = {
        color:props.mode==='light'?'black':'white',
        backgourndColor: props.mode==='dark'?'black':'white'
    }

    return (
        <div className='container' style={myStyle}>
            <h2 className='my-4' style={myStyle}>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Tour text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextModifier gives you a way to analyze your text quikly and efficently. be it word count, charecter count, converted into uppercase and lowercase and also you can copy you modified text here.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header"  id="headingTwo">
                        <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextModified is a free character counter tool that orivides instant character count & word count statictics for a given text. TextModifiers reports the number of words and characters. thus it is suitable for writing text with word character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Capability
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This word counter software works in any wev browser such as chrome, firefox, interner Explorer, safari, opera, it suits to count character in facebook,blog,excel,books,pdf documents etc.
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default About