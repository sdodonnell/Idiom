import React from 'react';
import CommentsIndexContainer from '../../containers/comments_index_container';
import { Link } from 'react-router-dom'
import StorySidebar from './story_sidebar';


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
                let story = this.props.story;
                const storyDate = new Date(story.publishDate);
                const storyDateString = storyDate.toDateString();
            return(
                <>
                <div className="story-wrapper">
                    <div className="story-image">
                        <img src={story.photoUrl} />                    
                    </div>
                    <div className="story-title">
                        <h1>{story.title}</h1>
                        <div className="author-bio">
                            <div className="user-icon">
                                {this.props.story.authorName[0]}
                            </div>
                            <div className="author-bio-text">
                                <Link to={`/users/${this.props.story.authorId}`}><p>{this.props.story.authorName}</p></Link>
                                {storyDateString.slice(3)}
                            </div>
                        </div>
                    </div>
                    {this.renderText()}
                    <div className="story-author-bio"></div>
                    <div className="story-comments">
                        <CommentsIndexContainer story={this.props.story}/>
                    </div>
                </div>
                <StorySidebar bookmarks={Object.values(this.props.likes)}/>
                </>
            )
        }
    }
}

export default StoryComponent