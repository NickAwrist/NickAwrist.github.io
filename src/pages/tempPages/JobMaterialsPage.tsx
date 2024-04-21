import React from 'react';

import '../../App.css';

const JobMaterialsPage: React.FC = () => {

    return(
        <div>
            <h2>Job Materials</h2>
            <div className="pdf">
                <object 
                data="temp/Job_Materials.pdf" 
                type="application/pdf"
                >
                <p>Your browser does not support PDFs. 
                    <a href="temp/Job_Materials.pdf">Download the Job Materials</a>.
                </p>
                </object>
            </div>

            <div className="breakPoint"></div>

        </div>
    )

};

export default JobMaterialsPage;