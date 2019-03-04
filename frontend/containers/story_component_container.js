import { connect } from 'react-redux';
import StoryComponent from '../components/Story/story_component';
import { fetchStory } from '../actions/story_actions';
import { fetchUser } from '../actions/user_actions'
import { fetchUserByStory } from '../reducers/selectors';

const mstp = (state, ownProps) => {
    let storyId = ownProps.match.params.id;
    const story = state.entities.stories[storyId]
    return ({
        story,
        user: fetchUserByStory(story, state.entities.users),
        storyId
    })
}

const mdtp = dispatch => ({
    fetchStory: id => dispatch(fetchStory(id)),
    fetchUser: id => dispatch(fetchUser(id))
})

export default connect(mstp, mdtp)(StoryComponent)