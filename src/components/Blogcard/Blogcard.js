import React from 'react'
import {useState} from 'react'
import searchicon from "..//..//Assets/Search icon.png"
import closeimg from "..//..//Assets/Close icon.png"
import "./blogcard.css"
import Blogcardcommon from '../common/Blogcardcommon'


const Blogcard = () => {
    const [searchvalue, setSearchvalue]=useState('');
   const clearvalue=()=>{
    setSearchvalue('Search writers, blogs')
     }


  return (
  <div className="blogcard-wrapper">
     <div className="searchbar">
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
     </div>
<div className="sort-container">
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
</div>
<Blogcardcommon/>
<Blogcardcommon/>


    </div>
  )
}

export default Blogcard
