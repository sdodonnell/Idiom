import React from 'react';
import { Link } from 'react-router-dom';

const StoryIndexItem = ({ story }) => {
    const storyDate = new Date(story.updatedAt)
    const storyDateString = storyDate.toDateString()
    return(
    <div className="story-index-item">
        <Link to={`/stories/${story.id}`}>
            <h2 className="story-index-title">{story.titlePreview}</h2>
        </Link>
        <h3 className="story-index-body">{story.bodyPreview}</h3>
        <p>Published on {storyDateString}</p>
    </div>
)}

export default StoryIndexItem