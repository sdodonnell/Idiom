import React from 'react';
import { Link } from 'react-router-dom'

const BookmarksIndexItem = ({ story }) => {
    
    const storyDate = new Date(story.publishDate);
    const storyDateString = storyDate.toDateString();

    return(
        <div className="story-index-item">
            <Link to={`/stories/${story.id}`}>
                <h2 className="story-index-title">{story.titlePreview}</h2>
            </Link>
            <h3 className="story-index-body">{story.bodyPreview}</h3>
            <Link to={`/stories/${story.authorId}`}>
                <p className="story-index-author">{story.authorName}</p>
            </Link>
            <p>Published on {storyDateString.slice(3)}</p>
            <div className={`story-index-dropdown-hidden`}>
                <a>Delete story</a>
            </div>
        </div>
    )

}
export default BookmarksIndexItem