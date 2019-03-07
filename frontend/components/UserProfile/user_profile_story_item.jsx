import React from 'react'
import StoryAuthorBio from '../Story/story_author_bio';
import { Link } from 'react-router-dom';

class UserProfileStoryItem extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            liked: this.props.liked,
            bookmarked: this.props.bookmarked
        }

        this.addLike = this.addLike.bind(this)
        this.addBookmark = this.addBookmark.bind(this)
    }

    addLike() {    
        if (!this.state.liked) {
            this.props.addLike({userId: this.props.currentUser.id, storyId: this.props.story.id})
            this.setState({
                liked: true
            })
        }
    }

    addBookmark() {
        if (!this.state.bookmarked) {
            this.props.addBookmark({userId: this.props.currentUser.id, storyId: this.props.story.id})
            this.setState({
                bookmarked: true
            })
        }
    }

    render () {
        const story = this.props.story;
        const author = this.props.author;
        return (<div className="profile-story-item">
            <StoryAuthorBio story={story} author={author}/>
            <div className="profile-story-item-picture">
                <img src={story.imageUrl}/>
            </div>
            <div className="profile-story-item-title">
                <Link to={`/stories/${story.id}`}>{story.titlePreview}</Link>
            </div>
            <div className="profile-story-item-description">
                {story.bodyPreview}
            </div>
            <div className="profile-story-item-footer">
                <div onClick={this.addLike} className="claps">{this.props.story.numLikes}</div>
                <div onClick={this.addBookmark} className="bookmark"><i className="far fa-bookmark"></i></div>
            </div>
        </div>)
    }
}

export default UserProfileStoryItem