import React from 'react';


class StoryComponent extends React.Component {

    componentDidMount() {
        this.props.fetchStory(this.props.storyId)
    }

    renderText() {
        const text = this.props.story.body;
        return (
            <div className="story-body">
                {text.split("\n").map((i,key) => {
                    return <p key={key}>{i}</p>;
                })}
            </div>
        )
    }

    render() {
        if (!this.props.story) {
            return (
                <div></div>
            )
        } else {
            return(
                <div className="story-wrapper">
                    <div className="story-image"></div>
                    <div className="story-title">
                        <h1>{this.props.story.title}</h1>
                    </div>
                    {this.renderText()}
                    <div className="story-author-bio"></div>
                    <div className="story-read-next"></div>
                </div>
            )
        }
    }
}

export default StoryComponent