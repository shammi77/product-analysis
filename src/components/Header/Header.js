import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <Link className="style-link" to='/home'>Home</Link>
                <Link className="style-link" to='/review'>Review</Link>
                <Link className="style-link" to='/blog'>Blog</Link>
                <Link className="style-link" to='About'>About</Link>
                <Link className="style-link" to='dashboard'>Dashboard</Link>
                
            </nav>
        </div>
    );
};

export default Header;