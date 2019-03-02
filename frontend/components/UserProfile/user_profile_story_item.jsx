import React from 'react'

const UserProfileStoryItem = ({story}) => (
    <div className="profile-story-item">
        <div className="profile-story-item-header"></div>
        <div className="profile-story-item-picture"></div>
        <div className="profile-story-item-title">
            {story.titlePreview}
        </div>
        <div className="profile-story-item-description">
            {story.bodyPreview}
        </div>
        <div className="profile-story-item-footer">
            <div>claps</div>
            <div>responses and bookmark</div>
        </div>
    </div>
)

export default UserProfileStoryItem