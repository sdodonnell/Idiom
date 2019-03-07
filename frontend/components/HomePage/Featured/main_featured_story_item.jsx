import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MainFeaturedStoryItem = ({story}) => {
if (story) {
    const storyDate = new Date(story.publishDate);
    const storyDateString = storyDate.toDateString();
    return (
        <div className="main-featured-story-item">
            <div className="homepage-image">
                <img src={story.imageUrl}/>
            </div>
            <NavLink to={`/stories/${story.id}`} className="main-featured-story-item-title">
                <h2>{story.titlePreview}</h2>
            </NavLink>            
            <p>{story.bodyPreview.slice(0, 175) + "..."}</p>
            <div>
                <Link 
                    to={`/users/${story.authorId}`}
                    className="author-link">
                    {story.authorName}
                </Link>
                <p>{storyDateString.slice(3)}</p>
            </div>
        </div>
    )} else {
        return <div></div>
    }
}

export default MainFeaturedStoryItem