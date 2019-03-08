import React from 'react'

const StoryAuthorBio = props => {
    const storyDate = new Date(props.story.publishDate);
    const storyDateString = storyDate.toDateString();
    return (
        <div className="author-bio profile-story-item-header">
            <img className="user-icon" src={props.author.profPicUrl} />
            <div className="author-bio-text">
                <p>{props.author.fullname}</p>
                {storyDateString.slice(3)}
            </div>
        </div>
    )

}


export default StoryAuthorBio