import { connect } from "react-redux";
import SessionForm from '../components/HomePage/session_form'
import { login, clearErrors } from "../actions/session_actions";

const mstp = ({errors}) => ({
    errors: errors.session,
    formType: 'Log In'
})

const mdtp = dispatch => ({
    action: id => dispatch(login(id)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mstp, mdtp)(SessionForm)