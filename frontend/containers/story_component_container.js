import { connect } from 'react-redux';
import StoryComponent from '../components/Story/story_component';
import { fetchStory } from '../actions/story_actions';

const mstp = (state, ownProps) => {
    let storyId = ownProps.match.params.id;
    const story = state.entities.stories[storyId]
    return ({
        story,
        storyId,
        bookmarks: state.entities.bookmarks,
        likes: state.entities.likes
    })
}

const mdtp = dispatch => ({
    fetchStory: id => dispatch(fetchStory(id)),
})

export default connect(mstp, mdtp)(StoryComponent)