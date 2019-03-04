import { connect } from "react-redux";
import CommentsComponent from "../components/Comments/comments_component";

const mstp = state => ({
    comments: state.entities.comments
})

const mdtp = dispatch => ({
    fetchComments: storyId => dispatch(fetchComments(storyId))
})

export default connect(mstp, mdtp)(CommentsComponent)