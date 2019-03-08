import React from 'react';
import CommentsIndexContainer from '../../containers/comments_index_container';
import { Link } from 'react-router-dom'
import StorySidebar from './story_sidebar';
import { HiddenRoute } from '../../util/auth_util';


class StoryComponent extends React.Component {

    componentWillMount() {
        this.props.fetchStory(this.props.storyId);
        this.props.fetchUserByStory(this.props.storyId)
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

    isLiked() {
        const likes = this.props.likes;
        for (let id in likes) {
            if (likes[id].userId === this.props.currentUser.id) {
                return true;
            }
        }
        return false
    }

    isBookmarked() {
        const bookmarks = this.props.bookmarks;
        for (let id in bookmarks) {
            if (bookmarks[id].userId === this.props.currentUser.id) {
                return true;
            }
        }
        return false
    }

    addFollow() {
        this.props.addFollow({followerId: this.props.currentUser.id, followedId: this.props.story.authorId})
    }

    render() {
        if (!this.props.story) {
            return (
                <div></div>
                )
            } else {
                let story = this.props.story;
                const storyDate = new Date(story.publishDate);
                const storyDateString = storyDate.toDateString();
                const button = story.isFollowed === true ? 
                    <button className="following-button">Following</button> :
                    <button className="not-following-button" onClick={this.addFollow.bind(this)}>Follow</button>
            return(
                <>
                <div className="story-wrapper">
                    <div className="story-image">
                        <img src={story.imageUrl} />                    
                    </div>
                    <div className="story-title">
                        <h1>{story.title}</h1>
                        <div className="author-bio">
                            <img className="user-icon" src={story.authorImageUrl}/>
                            <div className="author-bio-text">
                                <Link to={`/users/${this.props.story.authorId}`}><p>{this.props.story.authorName}</p></Link>
                                {storyDateString.slice(3)}
                            </div>
                            {button}
                        </div>
                    </div>
                    {this.renderText()}
                    <div className="story-author-bio"></div>
                    <div className="story-comments">
                        <CommentsIndexContainer story={this.props.story}/>
                    </div>
                </div>
                <HiddenRoute
                        path="/stories/:id"
                        render={ () => (
                            <StorySidebar 
                                likes={Object.values(this.props.likes)}
                                storyId={this.props.story.id}
                                currentUser={this.props.currentUser}
                                addLike={this.props.addLike}
                                addBookmark={this.props.addBookmark}
                                liked={this.isLiked()}
                                bookmarked={this.isBookmarked()}/>
                        )}
                    />
                </>
            )
        }
    }
}

export default StoryComponent