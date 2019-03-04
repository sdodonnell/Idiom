import { connect } from "react-redux";
import UserProfile from "../components/UserProfile/user_profile";
import { fetchUser } from "../actions/user_actions";
import { fetchStoriesByUser } from "../actions/story_actions";

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
    fetchStoriesByUser: id => dispatch(fetchStoriesByUser(id))
})

export default connect(mstp, mdtp)(UserProfile)