import React, { useState, useEffect } from 'react'
import searchicon from "..//..//Assets/Search icon.png"
import closeimg from "..//..//Assets/Close icon.png"
import "./blogcard.css"
import Blogcardcommon from '../common/Blogcardcommon'
import { motion } from "framer-motion";
import data from '../../macs.json'

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
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        const filtered = data.filter(item => item.name.toLowerCase().includes(searchvalue.toLowerCase()));
        setFilteredData(filtered);
    }, [searchvalue]);

    const clearvalue=()=>{
    setSearchvalue('')
     }

  return (
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
<Blogcardcommon data={filteredData}/>

  </div>
  )
}

export default Blogcard 