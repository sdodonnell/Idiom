import { createStory } from '../actions/story_actions';
import { connect } from 'react-redux';
import StoryForm from '../components/story_form'

const mstp = state => ({
    user: state.entities.users[state.session.id],
    title: "",
    body: "",
    formType: 'create'
})

const mdtp = dispatch => ({
    action: story => dispatch(createStory(story))
})

export default connect(mstp, mdtp)(StoryForm)