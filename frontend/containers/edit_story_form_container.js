import { updateStory } from '../actions/story_actions';
import { connect } from 'redux';
import StoryForm from '../components/story_form'

const mstp = state => ({
    user: state.entities.users[state.session.id],
    story: state.entities
})

const mdtp = dispatch => ({
    updateStory: story => dispatch(updateStory(story))
})

export default connect(mstp, mdtp)(StoryForm)