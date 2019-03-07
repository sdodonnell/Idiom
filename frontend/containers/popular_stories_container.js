import { connect } from 'react-redux';
import { selectPopularStories } from '../reducers/selectors';
import PopularStories from '../components/HomePage/Sidebar/popular_stories';

const mstp = state => ({
    stories: selectPopularStories(state.entities),
    currentUser: state.entities.users[state.session.id],
})


export default connect(mstp, null)(PopularStories)