import React from 'react'

const UserProfileBio = ({user}) => (
        <div className="user-profile-bio">
            <h1>{user.fullname}</h1>
            <div>Icon</div>
            <button>Follow</button>
            <p className="user-profile-bio-biography">Here's where the biography goes.</p>
            <div className="user-profile-bio-follows">
                <p>80 Following</p>
                <p>91 Followers</p>
            </div>
        </div> 
)

export default UserProfileBio