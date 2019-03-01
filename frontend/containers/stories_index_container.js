import StoriesIndex from "../components/stories_index";
import { connect } from 'react-redux';
import { fetchStories } from '../actions/story_actions';

const mstp = state => ({
    stories: state.entities.stories,
    currentUser: state.entities.users[state.session.id]
})

const mdtp = dispatch => ({
    fetchStories: userId => dispatch(fetchStories(userId))
})

export default connect(mstp, mdtp)(StoriesIndex)