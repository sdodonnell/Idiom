import React from 'react';
import { updateStory } from '../actions/story_actions';
import { connect } from 'react-redux';
import StoryForm from '../components/story_form'

const mstp = state => ({
    user: state.entities.users[state.session.id],
    story: state.entities,
    formType: 'edit'
})

const mdtp = dispatch => ({
    action: story => dispatch(updateStory(story))
})

const EditStoryForm = props => (
    <StoryForm 
        user={props.user}
        story={props.story}
        formType={props.formType}
        action={props.action}
        />
)

export default connect(mstp, mdtp)(EditStoryForm)