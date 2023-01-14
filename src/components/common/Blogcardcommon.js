import React from 'react'
import { Link } from 'react-router-dom'
import likeimg from "..//..//Assets/Vector.png"
import searchicon from "..//..//Assets/Search icon.png"
import {useState} from 'react'
import blogimg from "..//..//Assets/blog1.png"
import "./blogcardcommon.css"
import DataContext from '../../Context/datacontext'
import { useContext } from 'react'

const Blogcardcommon = () => {
    const [likeno, setLikeno]=useState(10)
  const [stylecontainer, setStylecontainer]= useState("card-container1")
  const {follower, setFollower} =useContext(DataContext)
const text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore quidem possimus autem veniam sint esse cumque, voluptates quasi et pariatur, voluptatibus quo eveniet quam amet exercitationem culpa adipisci ducimus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur obcaecati similique mollitia, cupiditate necessitatibus velit aperiam voluptates voluptas quia unde porro maiores non adipisci deserunt voluptatum libero odio, ex sed. lorem fdkmoooooofioj fngoidkvkcx.atibus velit aperiam voluptates voluptas quia unde porro maiores non adipisci deserunt voluptatum libero odio, ex sed. lorem fdkmoooooofioj fngoidkvkcx";
const MAX_LENGTH=500;


  return (
    <div className={stylecontainer}>
    <div className="card-header1">
      <div className="image-user1">
        <img src={searchicon} alt="" />
      </div>
      <div className="username1">
        <p>Blocker (Priyanshu Mehra)</p>
      </div>
      <div className="share-btn1">
        <button>Share</button>
      </div>
      <div className="Follow-btn1">
        <button onClick={()=>{
          setFollower(follower+1);
        }}>Follow</button>
      </div>
    </div>
    <div className="line-header1"></div>
     <div className="contentimg1">
    <div className="img-blog1">
  <img src={blogimg} alt="" />
    </div>
  <div className="content-blog1">
    <h2>1st Blog</h2>
    <div>
        {text.length > MAX_LENGTH ?
          (
            <div className='cont1'>
              {`${text.substring(0, MAX_LENGTH)}...`}
              <Link to="/showmore" ><span>Show more</span> </Link> 
            </div>
          ) :
          <div className='cont1'>
  {text}
          </div>
        }
      </div>
    
    <br />
 <div className="uploaddate">

  Uploaded on : 13 January, 2022
 </div>
  
  </div>
  
     </div>
     <div className="card-footer1">
      <div className="tagsblogs1">
      <div className="tags1">
       <p>Etheriem</p> 
      </div>
      <div className="tags1">
       <p>Etheriem</p> 
      </div>
      <div className="tags1">
       <p>Etheriem</p> 
      </div>
      <div className="tags1">
       <p>Etheriem</p> 
      </div>
      </div>
      <div className="card-footerright1">
        <div className="like1">
          <img src={likeimg} alt="" onClick={()=>{
            setLikeno(likeno+1)
          }}/>
          <div className="likescount1">{likeno}</div>
        </div>
        <div className="notintereset-btn1">
          <button onClick={()=>{
setStylecontainer("cardmove")
          }}>Not Interested</button>
        </div>
      </div>
     </div>
  </div>
  
  )
}

export default Blogcardcommon
