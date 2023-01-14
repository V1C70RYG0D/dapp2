import React from 'react'
import {useState} from 'react'
import searchicon from "..//..//Assets/Search icon.png"
import closeimg from "..//..//Assets/Close icon.png"
import "./blogcard.css"
import Blogcardcommon from '../common/Blogcardcommon'
import DataContext from '../../Context/datacontext';
import { useContext } from 'react';
import { motion } from "framer-motion";
import AddBlog from '../Add'

const searchVariants = {
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

const sortVariants = {
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

const Blogcard = () => {
    const [searchvalue, setSearchvalue]=useState('');
   const clearvalue=()=>{
    setSearchvalue('Search writers, blogs')
     }
     const {visible, setVisible}= useContext(DataContext);

  return (
    <>
    {
      visible ? <AddBlog/> : 
   
  <div className="blogcard-wrapper">
     <motion.div variants={searchVariants} initial="hidden" animate="visible" className="searchbar">
       <img src={searchicon} className='searchimg' alt="" />
        <input type="text"
        className='searchinput'
        onChange={(e)=>{
          setSearchvalue(e.target.value);
        }}
        value={searchvalue}
        placeholder='Search writers, blogs'
        />
          <img src={closeimg} className='closeimg' onClick={clearvalue} alt="" />
     </motion.div>
     <motion.div variants={sortVariants} initial="hidden" animate="visible" className="sort-container">
  <div className="sort-tags">
   <p>For You</p> 
  </div>
<p> Popular :</p>
<div className="sort-tags">
   <p>For You</p> 
  </div>
  <div className="sort-tags">
   <p>For You</p> 
  </div>
  <div className="sort-tags">
   <p>For You</p> 
  </div>
</motion.div>
<div className="blogcards">

<Blogcardcommon/>
<Blogcardcommon/>
</div>


    </div>
}
</>
  )
}

export default Blogcard
