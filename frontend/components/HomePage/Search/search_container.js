import { connect } from 'react-redux';
import Search from './search';
import { fetchSearchedStories, clearSearchStories } from '../../../actions/story_actions';

const mstp = state => ({
    results: state.entities.search
})

const mdtp = dispatch => ({
    fetchResults: query => dispatch(fetchSearchedStories(query)),
    clearResults: () => dispatch(clearSearchStories())
})

export default connect(mstp, mdtp)(Search)