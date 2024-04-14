import React from 'react';

const Footer: React.FC = () => {
    return (
        <div>
            <h2>Contact</h2>
                <div className="ContactSection">
                    <div className="ContactInfo">
                    <p><strong>Email:</strong> <a href="mailto:nick@example.com">nicholas.aristizabal@gmail.com</a></p>
                    </div>
                </div>

            <div className="breakPoint"></div>
        </div>
    );
};

export default Footer;