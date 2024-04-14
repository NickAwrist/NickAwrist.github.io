import React from 'react';

import '../App.css';

const ResumePage: React.FC = () => {
    return (
        <div>
            <h2>Resume</h2>
            <div className="ResumeSection">
                <object 
                data="resume.pdf" 
                type="application/pdf"
                >
                <p>Your browser does not support PDFs. 
                    <a href="resume.pdf">Download the resume</a>.
                </p>
                </object>
            </div>
        </div>
    );
};

export default ResumePage;