import React from 'react';

import '../../App.css';

const ProposalPage: React.FC = () => {

    return(
        <div>
            <h2>UCF Research Proposal</h2>
            <div className="pdf">
                <object 
                data="temp/proposal.pdf" 
                type="application/pdf"
                >
                <p>Your browser does not support PDFs. 
                    <a href="temp/Proposal.pdf">Download the proposal</a>.
                </p>
                </object>
            </div>

            <div className="breakPoint"></div>

        </div>
    )

};

export default ProposalPage;