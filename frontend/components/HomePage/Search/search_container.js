import { connect } from 'react-redux';
import Search from './search';
import { fetchSearchedStories } from '../../../actions/story_actions';

const mstp = state => ({
    results: state.entities.search
})

const mdtp = dispatch => ({
    fetchResults: query => dispatch(fetchSearchedStories(query))
})

export default connect(mstp, mdtp)(Search)