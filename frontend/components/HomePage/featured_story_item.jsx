import React from 'react'

const FeaturedStoryItem = props => {
    if (props.story) {
        return (
            <div className="featured-story-item">
                <div className="homepage-image">
                    <img src={props.story.photoUrls[0]}/>
                </div>
                <h3>{props.story.titlePreview}</h3>
                <p>{props.story.bodyPreview}</p>
            </div>
        )} else {
            return <div></div>
        }
    }

export default FeaturedStoryItem