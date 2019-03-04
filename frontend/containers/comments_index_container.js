import { connect } from "react-redux";
import CommentsIndex from "../components/Comments/comments_index";
import { fetchComments } from "../actions/comment_actions";

const mstp = (state) => ({
    comments: state.entities.comments
})

const mdtp = dispatch => ({
    fetchComments: storyId => dispatch(fetchComments(storyId))
})

export default connect(mstp, mdtp)(CommentsIndex)