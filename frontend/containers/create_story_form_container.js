import { createStory } from '../actions/story_actions';
import { connect } from 'redux';
import StoryForm from '../components/story_form'

const mstp = state => ({
    user: state.entities.users[state.session.id]
})

const mdtp = dispatch => ({
    createStory: story => dispatch(createStory(story))
})

export default connect(mstp, mdtp)(StoryForm)