import { connect } from "react-redux";
import UserProfile from "../components/UserProfile/user_profile";
import { fetchStories } from '../actions/story_actions'
import { fetchUser } from "../actions/user_actions";

const mstp = (state, ownProps) => {
    const userId = ownProps.match.params.id;
    return({
        userId,
        user: state.entities.users[userId],
        stories: state.entities.stories
    })
}

const mdtp = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    fetchStories: id => dispatch(fetchStories(id))
})

export default connect(mstp, mdtp)(UserProfile)