import { connect } from "react-redux";
import CommentsIndex from "../components/Comments/comments_index";
import { fetchUsersByComments } from "../reducers/selectors";
import { fetchUsers } from "../actions/user_actions";
import { createComment } from "../actions/comment_actions"

const mstp = (state) => ({
    comments: state.entities.comments,
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id],
})

const mdtp = dispatch => ({
    fetchUsers: (storyId) => dispatch(fetchUsers(storyId)),
    createComment: comment => dispatch(createComment(comment))
})

export default connect(mstp, mdtp)(CommentsIndex)