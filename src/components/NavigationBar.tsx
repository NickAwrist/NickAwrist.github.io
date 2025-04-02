import React from 'react';
import { NavLink } from 'react-router-dom';
import './componentStyles.css';


const NavigationBar: React.FC = () => {

    const activeStyle = { 
        color: 'var(--accent-color)',
        background: 'rgba(255, 255, 255, 0.05)'
    };

    return (
        <nav className="NavigationBar">
            <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}
                className={({ isActive }) => isActive ? 'active' : ''}>
                Home
            </NavLink>
            <NavLink to="/about-me" style={({ isActive }) => isActive ? activeStyle : undefined}
                className={({ isActive }) => isActive ? 'active' : ''}>
                About Me
            </NavLink>
            <NavLink to="/experience" style={({ isActive }) => isActive ? activeStyle : undefined}
                className={({ isActive }) => isActive ? 'active' : ''}>
                Experience
            </NavLink>
            <NavLink to="/resume" style={({ isActive }) => isActive ? activeStyle : undefined}
                className={({ isActive }) => isActive ? 'active' : ''}>
                Resume
            </NavLink>
        </nav>
    );
    
}

export default NavigationBar;