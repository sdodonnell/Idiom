import React from 'react';
import UserProfileStoryItem from './user_profile_story_item';
import UserProfileBio from './user_profile_bio';

class UserProfile extends React.Component {

    constructor(props) {
        super(props)

        this.renderStories = this.renderStories.bind(this)
        this.isBookmarked = this.isBookmarked.bind(this)
        this.isLiked = this.isLiked.bind(this)
        this.addFollow = this.addFollow.bind(this)
        this.isFollowed = this.isFollowed.bind(this)
    }

    componentWillMount() {
        this.props.fetchUser(this.props.userId);
        this.props.fetchStoriesByUser(this.props.userId)
    }

    isLiked(story) {
        const likes = story.likes;
        for (let id in likes) {
            if (likes[id].userId === this.props.user.id) {
                return true;
            }
        }
        return false
    }

    isBookmarked(story) {
        const bookmarks = story.bookmarks;
        for (let id in bookmarks) {
            if (bookmarks[id].userId === this.props.user.id) {
                return true;
            }
        }
        return false
    }

    isFollowed() {
        // const followers = this.props.follows
        // for (let id in follows) {
        //     if (follows[id].followedId === this.props.user.id) {
        //         return true;
        //     }
        // }
        // return false
        if (this.props.user.followerIds.includes(this.props.currentUser.id)) {
            return true
        }
        return false
    }

    addFollow() {
        this.props.addFollow({followerId: this.props.currentUser.id, followedId: this.props.user.id})
    }

    renderStories() {
        return Object.values(this.props.stories).map(story =>
            <UserProfileStoryItem 
                currentUser={this.props.currentUser}
                author={this.props.user}
                key={story.id}
                story={story}
                liked={this.isLiked(story)}
                bookmarked={this.isBookmarked(story)}
                addLike={this.props.addLike}
                addBookmark={this.props.addBookmark}/>
        )
    }

    render() {
        if (!this.props.user) {
            return <div></div>
        } else {
            return(
                <div className="user-profile-wrapper">
                    <div className="user-profile-bio-wrapper">
                        <UserProfileBio 
                            user={this.props.user}
                            addFollow={this.addFollow}
                            followed={this.isFollowed()}/>
                        {this.renderStories()}
                    </div>
                    <div></div>
                </div>
            )
        }
    }
}

export default UserProfile