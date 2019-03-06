import { connect } from 'react-redux';
import Featured from "../components/HomePage/featured";
import { selectRandomFourStories } from '../reducers/selectors';
import { fetchStories } from '../actions/story_actions';

const mstp = state => ({
    stories: selectRandomFourStories(state.entities.stories)
})

const mdtp = dispatch => ({
    fetchStories: () => dispatch(fetchStories())
})

export default connect(mstp, mdtp)(Featured)