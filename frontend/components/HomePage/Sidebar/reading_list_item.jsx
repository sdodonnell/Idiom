import React from 'react'

const ReadingListItem = ({story}) => {
    const storyDate = new Date(story.publishDate);
    const storyDateString = storyDate.toDateString();
    return (
        <div className="reading-list-item-wrapper">
            <h1>{rank}</h1>
            <div>
                <Link to={`/stories/${story.id}`}>
                    <h3>{story.titlePreview}</h3>
                </Link>
                <Link 
                    to={`/users/${story.authorId}`} 
                    className="author-link">
                    {story.authorName}
                </Link>
                <p>{storyDateString.slice(3)}</p>
            </div>
        </div>
    )
}


export default ReadingListItem