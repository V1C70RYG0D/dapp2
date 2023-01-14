import React from 'react'
import { Link } from 'react-router-dom'
import likeimg from "..//..//Assets/Vector.png"
import searchicon from "..//..//Assets/Search icon.png"
import {useState} from 'react'
import blogimg from "..//..//Assets/blog1.png"
import "./profile.css"
import editicon from "..//..//Assets/edit.png"
import removeicon from "..//..//Assets/delete.png"
import DataContext from '../../Context/datacontext'
import { useContext } from 'react'

const Profile = () => {

    const text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore quidem possimus autem veniam sint esse cumque, voluptates quasi et pariatur, voluptatibus quo eveniet quam amet exercitationem culpa adipisci ducimus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur obcaecati similique mollitia, cupiditate necessitatibus velit aperiam voluptates voluptas quia unde porro maiores non adipisci deserunt voluptatum libero odio, ex sed. lorem fdkmoooooofioj fngoidkvkcx.atibus velit aperiam voluptates voluptas quia unde porro maiores non adipisci deserunt voluptatum libero odio, ex sed. lorem fdkmoooooofioj fngoidkvkcx";
    const MAX_LENGTH=250;
const [styleblog ,setStyleblog] = useState('card-container');
const {follower, setFollower}= useContext(DataContext);

    return (
    <div className='profile-container'>
   <div className="profile-left">
<div className="profile-leftimg">
    <img src={blogimg} alt="" />
    <h1>Priyanshu Mehra</h1>
    <p>Blocker</p>
</div>
<div className="personal-info">
  <p>
Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaco ut aliquip ex ea commodo consequat.
  </p>
</div>
<div className="follow-profile">
{follower} Followers  |  3 Following
</div>
<div className="editprofile-btn">
  <button className="editt">
    Edit Profile
  </button>
</div>
   </div>
   <div className="profile-right">
    <h1>My Blogs</h1>
   <div className={styleblog}>
     <div className="contentimg">
    <div className="img-blog">
  <img src={blogimg} alt="" />
    </div>
  <div className="content-blog">
    <h2>1st Blog</h2>
    <div>
        {text.length > MAX_LENGTH ?
          (
            <div className='cont'>
              {`${text.substring(0, MAX_LENGTH)}...`}
              <Link to="/showmore" ><span>Show more</span> </Link> 
            </div>
          ) :
          <div className='cont'>
  {text}
          </div>
        }
      </div>
    <br />
  <p>
  Uploaded on : 13 January, 2022
  </p>
  <div className="prof-icons">
  <div>
           <img src={editicon} className="editicon" alt="" /> <span className='eddit'>Edit </span>
            </div> 
            <div>
            <img src={removeicon} className="removeicon" 
            
            alt="" />
            <span className='reemove'
            onClick={()=>{
        setStyleblog('card-container-rem')
            }}
            >Remove </span>
            </div>
        </div>
  </div>
  
     </div>
     <div className="card-footer">
      <div className="tagsblogs">
      <div className="tags">
       <p>Etheriem</p> 
      </div>
      <div className="tags">
       <p>Etheriem</p> 
      </div>
      <div className="tags">
       <p>Etheriem</p> 
      </div>
      <div className="tags">
       <p>Etheriem</p> 
      </div>
      </div>
      <div className="card-footerright">
        <div className="like">
          <img src={likeimg} alt=""/>
          <div className="likescount">10</div>
        </div>
      </div>
     </div>
  </div>
  <div className={styleblog}>
     <div className="contentimg">
    <div className="img-blog">
  <img src={blogimg} alt="" />
    </div>
  <div className="content-blog">
    <h2>1st Blog</h2>
    <div>
        {text.length > MAX_LENGTH ?
          (
            <div className='cont'>
              {`${text.substring(0, MAX_LENGTH)}...`}
              <Link to="/showmore" ><span>Show more</span> </Link> 
            </div>
          ) :
          <div className='cont'>
  {text}
          </div>
        }
      
      </div>
  
    <br />
  <p>
  Uploaded on : 13 January, 2022
  </p>
  <div className="prof-icons">
           <div>
           <img src={editicon} className="editicon" alt="" /> <span className='eddit'>Edit </span>
            </div> 
            <div>
            <img src={removeicon} className="removeicon"  alt="" />
            <span className='reemove'
             onClick={()=>{
                setStyleblog('card-container-rem')
                    }}
            >Remove </span>
            </div>
        </div>
  </div>
  
     </div>
     <div className="card-footer">
      <div className="tagsblogs">
      <div className="tags">
       <p>Etheriem</p> 
      </div>
      <div className="tags">
       <p>Etheriem</p> 
      </div>
      <div className="tags">
       <p>Etheriem</p> 
      </div>
      <div className="tags">
       <p>Etheriem</p> 
      </div>
      </div>
      <div className="card-footerright">
        <div className="like">
          <img src={likeimg} alt=""/>
          <div className="likescount">10</div>
        </div>
      </div>
     </div>
  </div>
   </div>
    </div>
  )
}

export default Profile
