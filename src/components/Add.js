import { Link, link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import DataContext from '../Context/datacontext';
import './Add.css';


const AddBlog = () => {
  const {visible, setVisible} = useContext(DataContext);

  const handleclick = () => {
    // link to profile

    setVisible(false);
  };
  return (

    <>
    <div className="overlay">
      
      </div>
    <div className="add-blog">
      <div className="add-blog__header">
        <h2>Add New Blog</h2>
        <button onClick={() => handleclick()}>X</button>
      </div>
      <div className="add-blog__banner">
      <label class="button-fil" for="upload">Upload File</label>
        <input type="file" accept="image/*" id='upload'/>
      </div>
      <div className="addtext-container">

      <textarea placeholder="Write your blog here"></textarea>
      <input type="text" placeholder="Add tags (separated with comma)" />
      </div>
     <div className="add-blog_footer">
        <div className="edit-profile__footer">
        <button onClick={() => setVisible(false)}>Cancel</button>
        <button>Upload</button>
        </div>
     </div>
      </div>
   
    </>
  );
};

export default AddBlog;
