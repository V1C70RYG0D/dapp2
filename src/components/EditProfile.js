import React, { useState } from 'react';

const EditProfile = () => {
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [profilePic, setProfilePic] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
            setProfilePic(reader.result);
        };
    
        reader.readAsDataURL(file);
    }
    
    const handleSave = () => {
        // Code to send the updated data (name and bio) to the server
        // Example:
        //
        // const data = { name, bio };
        //
        // fetch('/api/update-profile', {
        //   method: 'POST',
        //   body: JSON.stringify(data),
        //   headers: { 'Content-Type': 'application/json' },
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     if (data.success) {
        //       setVisible(false);
        //     } else {
        //       alert('An error occurred. Please try again.');
        //     }
        //   });
        // 
        // 
    }
    

    return (
        <div className={`edit-profile ${visible ? 'visible' : ''}`}>
            <div className="edit-profile__header">
                <h2>Edit Profile</h2>
                <button onClick={() => setVisible(false)}>X</button>
            </div>
            <div className="edit-profile__content">
                <div className="edit-profile__picture">
                    <img src={profilePic} alt="profile" />
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </div>
                <div className="edit-profile__details">
                    <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    <textarea placeholder="Add your bio" value={bio} onChange={e => setBio(e.target.value)} />
                </div>
            </div>
            <div className="edit-profile__footer">
                <button onClick={() => setVisible(false)}>Cancel</button>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default EditProfile;
