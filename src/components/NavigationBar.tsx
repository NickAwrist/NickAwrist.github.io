import React from 'react';
import { NavLink } from 'react-router-dom';
import './componentStyles.css';


const NavigationBar: React.FC = () => {

    const activeStyle = { 
        color: 'var(--accent-color)', 
        textDecoration: 'underline' 
    };

    return (
        <nav className="NavigationBar">
        <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>
            About Me
        </NavLink>
        <NavLink to="/experience" style={({ isActive }) => isActive ? activeStyle : undefined}>
            Experience
        </NavLink>
        <NavLink to="/resume" style={({ isActive }) => isActive ? activeStyle : undefined}>
            Resume
        </NavLink>
    </nav>
    );
    
}

export default NavigationBar;