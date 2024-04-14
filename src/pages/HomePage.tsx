import React from 'react';

import '../App.css';

const HomePage: React.FC = () => {

    return(
        <div>
            <h2>Home</h2>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img  src="headshot.png" alt="Headshot of Nicholas Aristizabal" style={{width: '235px', height: '300px'}}/>
            </div>
            <div className="TextBox">
                <p>
                This website is a portfolio of my work as a software developer. Included are some of the projects I have worked on,
                some information about me, my skills, previous work experience, and my resume. 
                Feel free to reach out to me if you have any questions or would like to work together.
                </p>
            </div>

            <div className="breakPoint"></div>
        </div>
    )

};

export default HomePage;