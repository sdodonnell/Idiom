import { connect } from "react-redux";
import SessionForm from '../components/session_form'
import { login } from "../actions/session_actions";

const mstp = ({errors}) => ({
    errors: errors.session,
    formType: 'Log In'
})

const mdtp = dispatch => ({
    action: id => dispatch(login(id)),
})

export default connect(mstp, mdtp)(SessionForm)