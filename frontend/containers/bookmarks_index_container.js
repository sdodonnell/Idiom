import {connect} from 'react-redux';
import BookmarksIndex from '../components/Bookmarks/bookmarks_index';
import { fetchBookmarkedStories } from '../actions/story_actions';

const mstp = state => ({
    stories: state.entities.stories,
})

const mdtp = dispatch => ({
    fetchBookmarkedStories: () => dispatch(fetchBookmarkedStories()),
})

export default connect(mstp, mdtp)(BookmarksIndex)
