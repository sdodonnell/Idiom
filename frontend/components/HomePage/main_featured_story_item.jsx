import React from 'react'

const MainFeaturedStoryItem = props => {
if (props.story) {
    return (
        <div className="main-featured-story-item">
            <div className="homepage-image">
                <img src={props.story.photoUrls[0]}/>
            </div>
            <h2>{props.story.titlePreview}</h2>
            <p>{props.story.bodyPreview}</p>
        </div>
    )} else {
        return <div></div>
    }
}

export default MainFeaturedStoryItem