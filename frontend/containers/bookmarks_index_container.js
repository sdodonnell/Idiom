import {connect} from 'react-redux';
import BookmarksIndex from '../components/Bookmarks/bookmarks_index';

const mstp = state => ({
    bookmarks: state.entities.bookmarks,
})

const mdtp = dispatch => ({
    
})

export default connect(mstp, mdtp)(BookmarksIndex)
