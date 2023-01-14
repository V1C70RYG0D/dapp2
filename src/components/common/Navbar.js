// navbar contains logo , link to 'add new blog' and 'profile pic' , logo is stored in assets folder
import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import { useContext } from 'react';
import plus from "..//..//Assets/plus.png"
import DataContext from '../../Context/datacontext';
import { Login, Logout } from '../../helpers/web3auth';
const Navbar = () => {
    const {log, setLog} = useContext(DataContext);
    const login = () => {
        Login();
        setLog(true);
      }
    
      const logout = () => {
        Logout();
        setLog(false);
      }
    
    return (
        <nav>
            <ul>
                <div className="logo">
                <li> <Link to="/"> <img src= "" alt= "Logo"/> </Link> </li>
                </div>
                <div className="logged">
                {
        (log?(
            <div className='rightbtns'>
            <button onClick={logout} className="logbtn-logout">Logout</button>
            <div className="add">
                <li> <Link to="/add">
                    <div className='addbtn'>
                <img className="plus" src={plus}/>
                <p className='addtxt'>Add New Blog</p>
                    </div>
                </Link> </li>
                </div>
                <div className="profile">
                <li> <Link to="/profile">Profile</Link> </li>
                </div>
          </div>
        ):
        (
            <button className="logbtn-login" onClick={login}>Login</button>
          
        ))
      }
                </div>
                
            </ul>
        </nav>
    );
}

export default Navbar;
