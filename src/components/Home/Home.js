import React from 'react';
import './Home.css';
import { motion } from "framer-motion";

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
        <h1>My App</h1>
        <p>A special and attractive app that does something amazing.</p>
      </motion.div>
    </div>
  );
}

export default HomePage;
