import { connect } from "react-redux";
import UserProfile from "../components/UserProfile/user_profile";
import { fetchUser } from "../actions/user_actions";
import { fetchStoriesByUser } from "../actions/story_actions";
import { createLike } from "../actions/like_actions";
import { createBookmark } from "../actions/bookmark_actions";
import { createFollow } from "../actions/follow_actions";

const mstp = (state, ownProps) => {
    const userId = ownProps.match.params.id;
    return({
        userId,
        user: state.entities.users[userId],
        currentUser: state.entities.users[state.session.id],
        stories: state.entities.stories,
        follows: state.entities.follows
    })
}

const mdtp = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    fetchStoriesByUser: id => dispatch(fetchStoriesByUser(id)),
    addLike: like => dispatch(createLike(like)),
    addBookmark: bookmark => dispatch(createBookmark(bookmark)),
    addFollow: follow => dispatch(createFollow(follow))
})

export default connect(mstp, mdtp)(UserProfile)