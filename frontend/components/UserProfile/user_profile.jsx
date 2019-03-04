import React from 'react';
import UserProfileStoryItem from './user_profile_story_item';

class UserProfile extends React.Component {

    constructor(props) {
        super(props)

        this.renderStories = this.renderStories.bind(this)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
        this.props.fetchStories(this.props.userId)
    }

    renderStories() {
        return Object.values(this.props.stories).map(story =>
            <UserProfileStoryItem 
                author={this.props.user}
                key={story.id}
                story={story}/>
        )
    }

    render() {
        if (!this.props.user) {
            return <div></div>
        } else {
            return(
                <div className="user-profile-wrapper">
                    <div>User Profile</div>
                    {this.renderStories()}
                    <div></div>
                    <div></div>
                </div>
            )
        }
    }
}

export default UserProfile