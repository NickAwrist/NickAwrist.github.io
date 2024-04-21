import React from 'react';

import '../../App.css';

const InstructionsPage: React.FC = () => {

    return(
       <div>
            <h2>Hoyolab Bot Setup Instructions</h2>

            <p>
                These instructions were part of an assignment in my Technical Writing class (ENC 3241) at UCF. We were tasked to create a set of instructions
                for a specific audience. In this case, the audience is people who are interested in setting up this Discord bot for their server.
            </p>
            <p>
                I approached this assignment by breaking down the steps into smaler and more managaable tasks. 
                I also took screenshots of the process to help the reader visualize what they should be seeing on their screen. I then 
                organized the steps in a logical order, starting with the prerequisites, then the installation, and finally the setup.
                Eacg step had a detailed description of what the user should do, and the screenshots were placed next to the 
                steps they corresponded to.
            </p>

            <p>
                My original submission had a few issues that I had to fix. Issues like having too large of spacing between some steps,
                not elaborating enough on some steps, going over the 1000 word limit, and my screenshots not being of the highest quality.
                In my revision, I fixed these issues by removing some unnecessary spacing, reworded some steps to be more concise,
                broke some steps down into smaller steps, and replaced the screenshots with higher quality ones. Below is the final version of the instructions.
            </p>

            <div className="pdf">
                <object 
                data="temp/Instructions.pdf" 
                type="application/pdf"
                >
                <p>Your browser does not support PDFs. 
                    <a href="temp/Instructions.pdf"> Download the Instructions</a>.
                </p>
                </object>
            </div>

            <div className="breakPoint"></div>

        </div>
    )

};

export default InstructionsPage;