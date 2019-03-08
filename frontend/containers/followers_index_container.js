import {connect} from 'react-redux';
import FollowersIndex from '../components/Followers/followers_index';
import { fetchFollowedUserStories } from '../actions/story_actions';

const mstp = state => ({
    stories: state.entities.stories
})

const mdtp = dispatch => ({
    fetchFollowedUserStories: userId => dispatch(fetchFollowedUserStories(userId))
})

export default connect(mstp, mdtp)(FollowersIndex)
