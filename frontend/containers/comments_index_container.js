import { connect } from "react-redux";
import CommentsIndex from "../components/Comments/comments_index";
import { fetchUsersByComments } from "../reducers/selectors";
import { fetchUsers } from "../actions/user_actions";
import { createComment } from "../actions/comment_actions"

const mstp = (state, ownProps) => ({
    comments: state.entities.comments,
    users: fetchUsersByComments(state.entities, state.entities),
    currentUser: state.entities.users[state.session.id],
})

const mdtp = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    createComment: comment => dispatch(createComment(comment))
})

export default connect(mstp, mdtp)(CommentsIndex)