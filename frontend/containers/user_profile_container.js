import { connect } from "react-redux";
import UserProfile from "../components/UserProfile/user_profile";
import { fetchStoriesByUser } from "../reducers/selectors";
import { fetchStories } from '../actions/story_actions'

const mstp = state => {
    const userId = state.session.id;
    return({
        user: state.entities.users[userId],
        stories: fetchStoriesByUser(state.entities, userId)
    })
}

const mdtp = dispatch => ({
    fetchStories: id => dispatch(fetchStories(id))
})

export default connect(mstp, mdtp)(UserProfile)