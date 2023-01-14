import React, { useState } from 'react';
import './Add.css';
const AddBlog = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={`add-blog ${visible ? 'visible' : ''}`}>
      <div className="add-blog__header">
        <h2>Add New Blog</h2>
        <button onClick={() => setVisible(false)}>X</button>
      </div>
      <div className="add-blog__banner">
        <input type="file" accept="image/*" />
      </div>
      <textarea placeholder="Write your blog here"></textarea>
      <input type="text" placeholder="Add tags (separated with comma)" />
      <div className="add-blog__footer">
        <button onClick={() => setVisible(false)}>Cancel</button>
        <button>Upload</button>
      </div>
    </div>
  );
};

export default AddBlog;
