import { connect } from 'react-redux';
import ReadingList from '../components/HomePage/Sidebar/reading_list';
import { selectBookmarkedStories } from '../reducers/selectors';
import { fetchBookmarks } from '../actions/bookmark_actions';

const mstp = state => ({
    userId: state.session.id,
    stories: selectBookmarkedStories(state)
})

const mdtp = dispatch => ({
    fetchBookmarks: () => dispatch(fetchBookmarks())
})


export default connect(mstp, mdtp)(ReadingList)