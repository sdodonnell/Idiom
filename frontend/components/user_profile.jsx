import React from 'react';
import UserProfileStoryItem from './user_profile_story_item';

class UserProfile extends React.Component {

    constructor(props) {
        super(props)

        this.renderStories = this.renderStories.bind(this)
    }

    componentDidMount() {
        this.props.fetchStories(this.props.user.id)
    }

    renderStories() {
        return this.props.stories.map(story =>
            <UserProfileStoryItem 
                story={story}/>
        )
    }

    render() {
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

export default UserProfile