import React from 'react';
import StoryAuthorBio from './story_author_bio';
import CommentsIndexContainer from '../../containers/comments_index_container';


class StoryComponent extends React.Component {

    componentWillMount() {
        this.props.fetchStory(this.props.storyId);
        this.props.fetchUser(this.props.story.userId)
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
                const storyDate = new Date(story.updatedAt);
                const storyDateString = storyDate.toDateString();
            return(
                <div className="story-wrapper">
                    <div className="story-image">
                        <img src={story.photoUrls[0]} />                    
                    </div>
                    <div className="story-title">
                        <h1>{story.title}</h1>
                        <div className="author-bio">
                            <div className="user-icon">
                                {/* {this.props.author.name[0]} */}
                            </div>
                            <div className="author-bio-text">
                                <p>{this.props.user}</p>
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
            )
        }
    }
}

export default StoryComponent