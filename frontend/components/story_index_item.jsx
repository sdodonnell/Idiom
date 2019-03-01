import React from 'react'

const StoryIndexItem = ({ story }) => (
    <div className="story-index-item">
        <h1>{story.titlePreview}</h1>
        <h1>{story.bodyPreview}</h1>
    </div>
)

export default StoryIndexItem