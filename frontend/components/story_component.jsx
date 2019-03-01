import React from 'react'

class StoryComponent extends React.Component {

    render() {
        const story = this.props.story
        console.log(story)
        return(
            <div className="story-wrapper">
                <h1 className="story-title">{story.title}</h1>
                <p className="story-body">{story.body}</p>
            </div>
        )
    }
}

export default StoryComponent