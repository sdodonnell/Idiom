import { connect } from "redux";
import SessionForm from '../components/session_form'
import { signup } from '../actions/session_actions'

const mstp = state => ({
    errors: state.errors,
    formType: 'Sign Up'
})

const mdtp = () => dispatch => ({
    signup: user => dispatch(signup(user))
})

export default connect(mstp, mdtp)(SessionForm)