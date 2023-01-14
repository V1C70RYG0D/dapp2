import React from 'react';
import './Home.css';
import { motion } from "framer-motion";
// import DataContext from '../Context/datacontext';

import { Login, Logout } from '../../helpers/web3auth';
import { useState } from 'react';
import mainIllus from "..//..//Assets/homw.png"
import main_brdr from "..//..//Assets/main_border.png"


const textVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1.5,
    },
  },
};

const imageVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
};

function HomePage() {
  const [user, setUser] = useState(null);
  // const login = () => {
  //   Login();
  //   setUser(true);
  // }

  // const logout = () => {
  //   Logout();
  //   setUser(false);
  // }
  const mainpage = () => {
    window.location.href = "/pages";
  }
  return (
    <div className="home-page">
      <div className='center'>
      <img src={mainIllus} className="main_illus" />
      <p className='paragh'>A Blog Website where BLOCKCHAIN developers from around the world can <br/>
      share their knowledge, learning and researches with other enthusiasts.<br/>
        They can also get a chance to win our exclusive SoulReaper x Router<br/>
        crosschain NFT.</p> 
      </div>
        <img src={main_brdr} className="main_brdr" />
      {/* <button onClick={login}>Login</button>
      <button onClick={logout} >Logout</button> */}
      <button onClick={mainpage}>Launch App</button>
    </div>
  );
}

export default HomePage;
