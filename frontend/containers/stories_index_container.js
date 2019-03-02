import StoriesIndex from "../components/StoryIndex/stories_index";
import { connect } from 'react-redux';
import { fetchStories, deleteStory } from '../actions/story_actions';

const mstp = (state) => ({
    stories: state.entities.stories,
    currentUser: state.entities.users[state.session.id],
})

const mdtp = dispatch => ({
    fetchStories: userId => dispatch(fetchStories(userId)),
    deleteStory: id => dispatch(deleteStory(id))
})

export default connect(mstp, mdtp)(StoriesIndex)