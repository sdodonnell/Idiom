import {connect} from 'react-redux';
import FollowersIndex from '../components/Followers/followers_index';

const mstp = state => ({
    follows: state.entities.follows
})

const mdtp = dispatch => ({
    
})

export default connect(mstp, mdtp)(FollowersIndex)
