import React from 'react'
import { Link } from 'react-router-dom'
import likeimg from "..//..//Assets/Vector.png"
import searchicon from "..//..//Assets/Search icon.png"
import {useState} from 'react'
import blogimg from "..//..//Assets/blog1.png"
import "./blogcardcommon.css"
import DataContext from '../../Context/datacontext'
import { useContext } from 'react'
import data from '../../macs.json'

const Blogcardcommon = (props) => {
    const [likeno, setLikeno]=useState(10)
  const [stylecontainer, setStylecontainer]= useState("card-container1")
  const {follower, setFollower} =useContext(DataContext)
  const MAX_LENGTH = 500;

  return (
    <div>
      {props.data.map((item, i) => (
        <div key={i} className={stylecontainer}>
          <div className="card-header1">
            <div className="image-user1">
              <img src={searchicon} alt="" />
            </div>
            <div className="username1">
              <p>{item.name}</p>
            </div>
            <div className="share-btn1">
              <button>Share</button>
            </div>
            <div className="Follow-btn1">
              <button onClick={() => {
                setFollower(follower + item.followers)
              }}>Follow</button>
            </div>
          </div>
          <div className="line-header1"></div>
          <div className="contentimg1">
            <div className="img-blog1">
              <img src={item.content.thumbnail} alt="" />
            </div>
            <div className="content-blog1">
              <h2>{item.content.title}</h2>
              <div>
                {item.content.description.length > MAX_LENGTH ? (
                  <div className='cont1'>
                    {`${item.content.description.substring(0, MAX_LENGTH)}...`}
                    <Link to={`/content/${i}`}><span>Show more</span> </Link>
                  </div>
                ) : (
                  <div className='cont1'>
                    {item.content.description}
                  </div>
                )}
              </div>
              <br />
             <div className="uploaddate">
          
      {item.content.time}
             </div>
            
  </div>
          </div>
          <div className="card-footer1">
            <div className="tagsblogs1">
              {item.content.tags.map((tag, index) => (
                <div key={index} className="tags1">
                  <p>{tag}</p>
                </div>
              ))}
            </div>
            <div className="card-footerright1">
              <div className="like1">
                <img src={likeimg} alt="" onClick={() => {
                  item.content.likes = item.content.likes + 1
                }} />
                <div className="likescount1">{item.content.likes}</div>
              </div>
              <div className="notintereset-btn1">
                <button onClick={() => {
                  setStylecontainer("cardmove")
                }}>Not Interested</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Blogcardcommon