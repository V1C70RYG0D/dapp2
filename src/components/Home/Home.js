import React from 'react';
import './Home.css';
import { motion } from "framer-motion";
import { Login, Logout } from '../../helpers/web3auth';
import { useState } from 'react';

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
    const[user, setUser] = useState(null);
const login = () => {
        Login();
        setUser(true);
    }

    const logout = () => {
        Logout();
        setUser(false);
    }
    const mainpage = () => {
        window.location.href = "/pages";
    }
  return (
    <div className="home-page">
      <motion.img
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="home-page-logo"
        src={require("./logo.webp")}
        alt="logo"
      />
      <motion.div variants={textVariants} initial="hidden" animate="visible">
        <h1>BLOCS</h1>
        <p>Building up Block-Chain Community</p>
      </motion.div>
      <button onClick={login}>Login</button>
    <button onClick={logout} >Logout</button>
    <button onClick={mainpage}>Launch App</button>
    </div>
  );
}

export default HomePage;
