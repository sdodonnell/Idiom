import React from 'react'

const UserProfileBio = ({user, followed, addFollow}) => {
    
    const button = followed === true ? 
        <button className="following-button">Following</button> :
        <button className="not-following-button" onClick={addFollow}>Follow</button>
    
    return (
        <div className="user-profile-bio">
        <div>
            <h1>{user.fullname}</h1>
            {button}
        </div>
        <img />
        <p className="user-profile-bio-biography">Here's where the biography goes.</p>
        <div className="user-profile-bio-follows">
            <p>80 Following</p>
            <p>91 Followers</p>
        </div>
        </div> 
    )
}
        

export default UserProfileBio