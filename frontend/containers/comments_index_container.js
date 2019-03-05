import { connect } from "react-redux";
import CommentsIndex from "../components/Comments/comments_index";
import { fetchUsersByComments } from "../reducers/selectors";
import { fetchUsers } from "../actions/user_actions";

const mstp = (state) => ({
    comments: state.entities.comments,
    users: fetchUsersByComments(state.entities, state.entities)
})

const mdtp = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mstp, mdtp)(CommentsIndex)