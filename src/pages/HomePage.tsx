import React from 'react';

import '../App.css';

const HomePage: React.FC = () => {

    return(
        <div>
            <h2>Home</h2>
            <div className="TextBox" style={{overflow: 'hidden'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
                    <div style={{
                        width: '200px', 
                        height: '200px', 
                        borderRadius: '50%', 
                        overflow: 'hidden',
                        border: '3px solid var(--accent-color)',
                        boxShadow: 'var(--box-shadow)'
                    }}>
                        <img src="headshot.png" alt="Headshot of Nicholas Aristizabal" 
                            style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                    </div>
                    <p style={{textAlign: 'center', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto'}}>
                        This website is a portfolio of my work as a software developer. Included are some of the projects I have worked on,
                        some information about me, my skills, previous work experience, and my resume. 
                        Feel free to reach out to me if you have any questions or would like to work together.
                    </p>
                </div>
            </div>

            <div className="breakPoint"></div>
        </div>
    )

};

export default HomePage;