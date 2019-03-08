import { connect } from 'react-redux';
import ReadingList from '../components/HomePage/Sidebar/reading_list';
import { selectBookmarkedStories } from '../reducers/selectors';
import { fetchBookmarkedStories } from '../actions/bookmark_actions';

const mstp = state => ({
    userId: state.session.id,
    stories: selectBookmarkedStories(state)
})

const mdtp = dispatch => ({
    // fetchBookmarkedStories: () => dispatch(fetchBookmarkedStories())
})


export default connect(mstp, mdtp)(ReadingList)