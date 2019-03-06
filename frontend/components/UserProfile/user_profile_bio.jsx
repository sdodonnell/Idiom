import React from 'react'

const UserProfileBio = ({user}) => (
        <div className="user-profile-bio">
            <div>
                <h1>{user.fullname}</h1>
                <button>Follow</button>
            </div>
            <img />
            <p className="user-profile-bio-biography">Here's where the biography goes.</p>
            <div className="user-profile-bio-follows">
                <p>80 Following</p>
                <p>91 Followers</p>
            </div>
        </div> 
)

export default UserProfileBio