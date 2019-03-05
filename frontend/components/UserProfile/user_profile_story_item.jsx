import React from 'react'
import StoryAuthorBio from '../Story/story_author_bio';
import { Link } from 'react-router-dom';

const UserProfileStoryItem = ({story, author}) => (
    <div className="profile-story-item">
        <StoryAuthorBio story={story} author={author}/>
        <div className="profile-story-item-picture">
            <img src={story.photoUrls[0]}/>
        </div>
        <div className="profile-story-item-title">
            <Link to={`/stories/${story.id}`}>{story.titlePreview}</Link>
        </div>
        <div className="profile-story-item-description">
            {story.bodyPreview}
        </div>
        <div className="profile-story-item-footer">
            <div className="claps"></div>
            <div className="bookmark"><i className="far fa-bookmark"></i></div>
        </div>
    </div>
)

export default UserProfileStoryItem