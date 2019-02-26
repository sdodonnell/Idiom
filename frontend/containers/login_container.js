import { connect } from "redux";
import SessionForm from '../components/session_form'
import { login } from "../actions/session_actions";

const mstp = state => ({
    errors: state.errors,
    formType: 'Log In'
})

const mdtp = () => dispatch => ({
    action: id => dispatch(login(id))
})

export default connect(mstp, mdtp)(SessionForm)