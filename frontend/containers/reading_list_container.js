import { connect } from 'react-redux';
import ReadingList from '../components/HomePage/Sidebar/reading_list';

const mstp = state => ({
    bookmarks: state.entities.bookmarks,
    currentUser: state.entities.users[state.session.id],
})


export default connect(mstp, null)(ReadingList)