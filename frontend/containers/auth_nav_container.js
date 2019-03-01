import { connect } from "react-redux";
import AuthNav from '../components/auth_nav'
import { logout } from '../actions/session_actions'
import { createStory } from "../actions/story_actions";
import { openModal } from '../actions/modal_actions'

const mstp = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mdtp = dispatch => ({
    logout: () => dispatch(logout()),
    createStory: story => dispatch(createStory(story)),
    closeModal: modal => dispatch(openModal(modal))
})

export default connect(mstp, mdtp)(AuthNav)