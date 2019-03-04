import { connect } from 'react-redux';
import { fetchStories } from '../actions/story_actions';
import Feed from '../components/HomePage/feed';
import { fetchUsers } from '../actions/user_actions';

const mstp = (state) => ({
    stories: state.entities.stories,
    users: state.entities.users,
})

const mdtp = dispatch => ({
    fetchStories: () => dispatch(fetchStories()),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mstp, mdtp)(Feed)