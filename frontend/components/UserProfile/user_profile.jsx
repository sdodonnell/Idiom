import React from 'react';
import UserProfileStoryItem from './user_profile_story_item';
import UserProfileBio from './user_profile_bio';

class UserProfile extends React.Component {

    constructor(props) {
        super(props)

        this.renderStories = this.renderStories.bind(this)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
        this.props.fetchStoriesByUser(this.props.userId)
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
                    <div className="user-profile-bio-wrapper">
                        <UserProfileBio user={this.props.user} />
                        {this.renderStories()}
                    </div>
                    <div></div>
                </div>
            )
        }
    }
}

export default UserProfile