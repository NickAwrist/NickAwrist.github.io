import React from 'react';

import '../../App.css';

const ProposalPage: React.FC = () => {

    return(
        <div>

            <h2>UCF Research Proposal</h2>

            <p>
                This Research Proposal was part of an assignment in my Technical Writing class (ENC 3241) at UCF. As a team of three, we were tasked to come up with a research question
                related to our major and write a proposal for that research question. The research question we chose was "How does participating in Hackathons affect a 
                Computer Science student's chances of getting a job after college?".
            </p>

            <p>
                My part of the assignment was to write the project background and significance, and the literature review section. I approached this assignment by 
                first researching the topic to get a better understanding of what I was writing about. I used Google Scholars to find articles related to our research question
                and created an annotated bibliography to help me write the literature review. I read through each article and took notes on the important information 
                that I could use and how I would use it. I then synthesized the information from the articles to write the project background and significance section.
            </p>

            <p>
                My original submission had a few issues that needed fixing. Those issues came from the project background and significance section. One issue was that 
                I did not directly link hackathons to student employability, and another issue was that used an indirect source instead of a direct source. In my revision,
                I fixed these issues by finding research that linked hackathons to student employability and found the root of the indirect source and replaced 
                it with a direct source. I also focused more on the research question which enhanced the significance of the research. Below is the final version of the research proposal.
            </p>

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