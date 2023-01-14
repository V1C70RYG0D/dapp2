// navbar contains logo , link to 'add new blog' and 'profile pic' , logo is stored in assets folder
import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return (
        <nav>
            <ul>
                <div className="logo">
                <li> <Link to="/"> <img src= "" alt= "Logo"/> </Link> </li>
                </div>
                <div className="plus-icon">
                    
                </div>
                <div className="add">
                <li> <Link to="/add">Add New Blog</Link> </li>
                </div>
                <div className="profile">
                <li> <Link to="/profile">Profile</Link> </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;