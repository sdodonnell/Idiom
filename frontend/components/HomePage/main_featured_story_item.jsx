import React from 'react';
import { Link } from 'react-router-dom';

const MainFeaturedStoryItem = ({story}) => {
if (story) {
    const storyDate = new Date(story.updatedAt);
    const storyDateString = storyDate.toDateString();
    return (
        <div className="main-featured-story-item">
            <div className="homepage-image">
                <img src={story.photoUrls[0]}/>
            </div>
            <h2>{story.titlePreview}</h2>
            <p>{story.bodyPreview.slice(0, 175) + "..."}</p>
            <div>
                <Link 
                    to={`/users/${story.authorId}`}
                    className="author-link">
                    {story.authorName}
                </Link>
                <p>{storyDateString}</p>
            </div>
        </div>
    )} else {
        return <div></div>
    }
}

export default MainFeaturedStoryItem