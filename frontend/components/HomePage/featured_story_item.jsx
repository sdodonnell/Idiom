import React from 'react';
import { Link } from 'react-router-dom'

const FeaturedStoryItem = ({story}) => {
    if (story) {
        const storyDate = new Date(story.updatedAt);
        const storyDateString = storyDate.toDateString();
        return (
            <div className="featured-story-item">
                <div className="homepage-image">
                    <img src={story.photoUrls[0]}/>
                </div>
                <h3>{story.titlePreview}</h3>
                <p>{story.bodyPreview.slice(0, 100) + "..."}</p>
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

export default FeaturedStoryItem