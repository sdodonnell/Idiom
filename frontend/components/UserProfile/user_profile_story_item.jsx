import React from 'react'
import StoryAuthorBio from '../Story/story_author_bio';

const UserProfileStoryItem = ({story, author}) => (
    <div className="profile-story-item">
        <StoryAuthorBio story={story} author={author}/>
        <div className="profile-story-item-picture">
            {story.photoUrls[0]}
        </div>
        <div className="profile-story-item-title">
            {story.titlePreview}
        </div>
        <div className="profile-story-item-description">
            {story.bodyPreview}
        </div>
        <div className="profile-story-item-footer">
            <div id="claps"></div>
            <div id="bookmark"><i className="far fa-bookmark"></i></div>
        </div>
    </div>
)

export default UserProfileStoryItem