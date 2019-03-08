import React from 'react'

const UserProfileBio = ({user, followed, addFollow}) => {
    
    const button = followed === true ? 
        <button className="following-button">Following</button> :
        <button className="not-following-button" onClick={addFollow}>Follow</button>
    
    const img = user.profPicUrl ? 
        <img src={user.profPicUrl} /> :
        <div className="no-photo-icon">{user.fullname[0]}</div>

    return (
        <div className="user-profile-bio">
        <div>
            <h1>{user.fullname}</h1>
            {button}
        </div>
        {img}
        <p className="user-profile-bio-biography">{user.bio}</p>
        <div className="user-profile-bio-follows">
            <p>{user.numFollowing} Following</p>
            <p>{user.numFollowers} Followers</p>
        </div>
        </div> 
    )
}
        

export default UserProfileBio