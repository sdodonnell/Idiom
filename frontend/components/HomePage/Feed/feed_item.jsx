import React from 'react';
import { Link } from 'react-router-dom'

class FeedItem extends React.Component {

    render() {
        if (!this.props.story) {
            return <div></div>
        } else {
            const story = this.props.story
            const storyDate = new Date(story.publishDate);
            const storyDateString = storyDate.toDateString();
            return (
                <div className="feed-item-wrapper">
                    <Link to={`/stories/${story.id}`}>
                        <h1>{
                            story.titlePreview.length > 100 ? 
                                story.titlePreview.slice(0, 100) + "..." :
                                story.titlePreview
                            }</h1>
                    </Link>
                    <div className="feed-item-image">
                        <img src={story.imageUrl}/>
                    </div>
                    <p>{story.bodyPreview + "..."}</p>
                    <Link 
                        to={`/users/${this.props.authorId}`} 
                        className="author-link">
                        {this.props.authorName}
                    </Link>
                    <p>{storyDateString.slice(3)}</p>
                </div>
            )
        }
    }
}

export default FeedItem