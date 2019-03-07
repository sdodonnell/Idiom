import { connect } from 'react-redux';
import { fetchStories } from '../actions/story_actions';
import HomePage from '../components/HomePage/home_page';

const mstp = (state) => ({
    stories: state.entities.stories,
})

const mdtp = dispatch => ({
    fetchStories: () => dispatch(fetchStories()),
})

export default connect(mstp, mdtp)(HomePage)