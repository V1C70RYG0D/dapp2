/*

this will have a back button to go to card page, tags  
below this will have authon's pic , name, button to follow
below this will have the post content along with heading and image between authors name and content
a button to edit and remove if the post is of the user logged in 
a like button 
at the bottom of the content will be a comment section with a text box and a button to add comment
below this will have the comments section
for now dont use api , use dummy data

*/import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PostPage.css';
const PostPage = () => {
const [post, setPost] = useState({
title: "My Post Title",
creatorId: 1,
image: "https://via.placeholder.com/600x400",
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna eu placerat bibendum, ipsum velit tristique dolor, et vestibulum augue diam euismod ipsum. Sed velit augue, rutrum vel interdum vel, malesuada vel odio. Nam euismod, quam vel tincidunt tempor, quam odio tristique nulla, et luctus augue odio vel mauris. Quisque vestibulum, libero a malesuada tincidunt, sapien magna tempus massa, eu euismod erat enim in augue. Sed at nulla a odio congue blandit a ut ante. Sed auctor, magna eu placerat bibendum, ipsum velit tristique dolor, et vestibulum augue diam euismod ipsum."
});
const [creator, setCreator] = useState({
id: 1,
name: "John Doe",
profilePic: "https://via.placeholder.com/150",
followers: [2, 3, 4],
following: [5, 6, 7]
});
const [comments, setComments] = useState([
{id: 1, text: "Great post!", creator: { name: "Jane Smith" }},
{id: 2, text: "I agree!", creator: { name: "Bob Johnson" }},
{id: 3, text: "I disagree.", creator: { name: "Samantha Lee" }}
]);
const [newComment, setNewComment] = useState("");
const [isFollowing, setIsFollowing] = useState(false);
const [isLiked, setIsLiked] = useState(false);
const [currentUser, setCurrentUser] = useState({ id: 2 });
const tags = ["tag1", "tag2", "tag3"];

const handleFollow = () => {
    setIsFollowing(!isFollowing);
}

const handleLike = () => {
    setIsLiked(!isLiked);
}

const handleDelete = () => {
    // delete post
}

const handleCommentSubmit = () => {
    // add comment
    
}



const handleCommentChange = (event) => {
    setNewComment(event && event.target && event.target.value);
}

const handleAddComment = () => {
    const newCommentObj = {
        id: comments.length + 1,
        text: newComment,
        creator: { name: currentUser.name }
    };
    setComments([...comments, newCommentObj]);
    setNewComment("");
}

        return (
            <div className="post-page">
                <div className="post-page__header">       
                    <Link to="/">
                    <button className="post-page__back-button">Back</button>
                    </Link>
                    <div className="post-page__tags">
                        {tags.map(tag => (
                            <p className="post-page__tag" key={tag}>{tag}</p>
                        ))}
                    </div>
                    <div className="post-page__creator">
                        
                        <button className="post-page__follow-btn" onClick={handleFollow}>{isFollowing ? "Unfollow" : "Follow"}</button>
                       
                    </div>
                </div>
                <div className="post-page__content">
                    <img src={post.image} alt="Post" className="post-page__image"  />
                    <h1 className="post-page__title">{post.title}</h1>
                    <div className="post-page__creator">
                    <img src={creator.profilePic} alt="Profile" className="post-page__creator-pic" />
                        <p className="post-page__creator-name">{creator.name}</p>
                        </div>
                    <p className="post-page__description">{post.description}</p>
                    <button className="post-page__like-btn" onClick={handleLike}>Like</button>
                </div>
                <div className="post-page__comments">
                    <h2 className="post-page__comments-title">Comments</h2>
                    <form className="post-page__comment-form" onSubmit={handleCommentSubmit}>
                        <input type="text" className="post-page__comment-input" placeholder="Add a comment..." value={newComment} onChange={handleCommentChange} />
                        <button className="post-page__comment-submit-btn" onClick={handleAddComment}>Submit</button>
                    </form>
                    <div className="post-page__comment-list">
                        {comments.map(comment => (
                            <div key={comment.id} className="post-page__comment">
                                <p className="post-page__comment-text">{comment.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
        
export default PostPage;