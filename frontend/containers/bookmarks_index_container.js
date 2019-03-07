import {connect} from 'react-redux';
import BookmarksIndex from '../components/Bookmarks/bookmarks_index';

const mstp = state => ({
    currentUser: state.entities.users[state.session.id],
})

const mdtp = dispatch => ({

})

export default connect(mstp, mdtp)(BookmarksIndex)
