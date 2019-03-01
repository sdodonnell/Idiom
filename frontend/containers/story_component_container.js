import { connect } from 'react-redux';
import StoryComponent from '../components/story_component';
import { fetchStory } from '../actions/story_actions'

const mstp = (state, ownProps) => {
    let storyId = ownProps.match.params.id
    return ({
        story: state.entities.stories[storyId],
    })
}

const mdtp = dispatch => ({
    fetchStory: id => dispatch(fetchStory(id))
})

export default connect(mstp, mdtp)(StoryComponent)