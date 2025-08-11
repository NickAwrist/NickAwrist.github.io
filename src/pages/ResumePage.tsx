import React from 'react';

import '../App.css';

const ResumePage: React.FC = () => {
    // Manually set the date when the resume was last updated
    const resumeLastUpdatedDate = new Date('2025-05-04');
    const lastUpdated = resumeLastUpdatedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div>
            <h2>Resume</h2>
            <div className="resume-last-updated">
                <em>Last updated: {lastUpdated}</em>
            </div>
            <div className="pdf">
                <object 
                data="resume.pdf" 
                type="application/pdf"
                >
                <p>Your browser does not support PDFs. 
                    <a href="resume.pdf"> Download the resume</a>.
                </p>
                </object>
            </div>

            <div className="breakPoint"></div>

        </div>
    );
};

export default ResumePage;