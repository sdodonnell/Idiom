import React from 'react';
import { Link } from 'react-router-dom'

class FeedItem extends React.Component {

    render() {
        if (!this.props.story) {
            return <div></div>
        } else {
            const story = this.props.story
            const storyDate = new Date(story.updatedAt);
            const storyDateString = storyDate.toDateString();
            return (
                <Link to={`/stories/${story.id}`} className="feed-item-wrapper">
                    <h1>{story.titlePreview}</h1>
                    <img src={story.photoUrls[0]}/>
                    <p>{story.bodyPreview.slice(0, 175) + '...'}</p>
                    <p>{this.props.author.fullname}</p>
                    <p>{storyDateString}</p>
                </Link>
            )
        }
    }
}

export default FeedItem