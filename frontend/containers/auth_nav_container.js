import { connect } from "react-redux";
import AuthNav from '../components/HomePage/auth_nav'
import { logout } from '../actions/session_actions'
import { createStory } from "../actions/story_actions";

const mstp = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mdtp = dispatch => ({
    logout: () => dispatch(logout()),
    createStory: story => dispatch(createStory(story)),
})

export default connect(mstp, mdtp)(AuthNav)