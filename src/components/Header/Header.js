import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className='header-section'>
            <h1 className='web-name'>Star Shop</h1>
            <nav>
                <Link to="/home">HOME</Link>
                <Link to="/reviews">REVIEWS</Link>
                <Link to="/dashboard">DASHBOARD</Link>
                <Link to="/blogs">BLOGS</Link>
                <Link to="/about">ABOUT</Link>
            </nav>
        </div>
    );
};

export default Header;