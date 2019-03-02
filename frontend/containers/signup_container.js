import { connect } from "react-redux";
import SessionForm from '../components/HomePage/session_form'
import { signup, clearErrors } from '../actions/session_actions'

const mstp = ({errors}) => ({
    errors: errors.session,
    formType: 'Sign Up'
})

const mdtp = dispatch => ({
    action: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mstp, mdtp)(SessionForm)