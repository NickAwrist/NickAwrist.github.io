import React from 'react';

import '../../App.css';

const JobMaterialsPage: React.FC = () => {

    return(
        <div>
            <h2>Job Materials</h2>

            <p>
                These Job Materials were part of an assignment in my Technical Writing class (ENC 3241) at UCF. We were tasked to look for a internship posting 
                on Handshake and create a resume, cover letter, and a mock interview presentation for that position.
            </p>

            <p>
                I approached this assignment by first looking for an internship posting that I was interested in. I then tailored my resume and cover letter
                to that specific position. I also created a presentation that I would use in a mock interview for that position. I made sure to include 
                relevant information in each of the materials, such as my skills, experiences, and how they relate to the position I was applying for.
            </p>

            <p>
                My original submission had a few issues that needed fixing. Some of those issues were that my resume did not have the dates for my personal projects,
                my name on my resume was not large enough, and a few sentences in my cover letter needed to be expanded on. In my revision, I fixed these issues by
                adding the dates for my personal projects, increasing the size of my name on my resume, and edited the sentences in my cover letter. 
                Below is the final version of the job materials and the YouTube video to my mock interview.
                
            </p>

            <div className="pdf">
                <object 
                data="temp/Job_Materials.pdf" 
                type="application/pdf"
                >
                <p>Your browser does not support PDFs. 
                    <a href="temp/Job_Materials.pdf"> Download the Job Materials</a>.
                </p>
                </object>
            </div>

            <div className='pdf'>
                <iframe 
                title="Job Materials Presentation"
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/gQ5INOk1kkk" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                >
                </iframe>
            </div>

            <div className="breakPoint"></div>

        </div>
    )

};

export default JobMaterialsPage;