import React from 'react';

import '../../App.css';

const InstructionsPage: React.FC = () => {

    return(
       <div>
            <h2>Hoyolab Bot Setup Instructions</h2>
            <div className="pdf">
                <object 
                data="temp/Instructions.pdf" 
                type="application/pdf"
                >
                <p>Your browser does not support PDFs. 
                    <a href="temp/Instructions.pdf">Download the Instructions</a>.
                </p>
                </object>
            </div>

            <div className="breakPoint"></div>

        </div>
    )

};

export default InstructionsPage;