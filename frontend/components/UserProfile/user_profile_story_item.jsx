import React from 'react'
import StoryAuthorBio from '../Story/story_author_bio';

const UserProfileStoryItem = ({story, author}) => (
    <div className="profile-story-item">
        <StoryAuthorBio story={story} author={author}/>
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