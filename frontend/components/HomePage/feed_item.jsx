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
                <div className="feed-item-wrapper">
                    <Link to={`/stories/${story.id}`}>
                        <h1>{story.titlePreview}</h1>
                    </Link>
                    <div className="feed-item-image">
                        <img src={story.photoUrls[0]}/>
                    </div>
                    <p>{story.bodyPreview.slice(0, 175) + '...'}</p>
                    <Link 
                        to={`/users/${this.props.author.id}`} 
                        className="feed-item-author-link">
                        {this.props.author.fullname}
                    </Link>
                    <p>{storyDateString}</p>
                </div>
            )
        }
    }
}

export default FeedItem