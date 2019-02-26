import { connect } from "react-redux";
import SessionForm from '../components/session_form'
import { signup } from '../actions/session_actions'

const mstp = ({errors}) => ({
    errors,
    formType: 'Sign Up'
})

const mdtp = dispatch => ({
    action: user => dispatch(signup(user))
})

export default connect(mstp, mdtp)(SessionForm)