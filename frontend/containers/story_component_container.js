import { connect } from 'react-redux';
import StoryComponent from '../components/Story/story_component';
import { fetchStory } from '../actions/story_actions';
import { createLike } from '../actions/like_actions';
import { createBookmark } from '../actions/bookmark_actions'

const mstp = (state, ownProps) => {
    let storyId = ownProps.match.params.id;
    const story = state.entities.stories[storyId]
    return ({
        story,
        storyId,
        bookmarks: state.entities.bookmarks,
        likes: state.entities.likes,
        currentUser: state.entities.users[state.session.id]
    })
}

const mdtp = dispatch => ({
    fetchStory: id => dispatch(fetchStory(id)),
    addLike: like => dispatch(createLike(like)),
    addBookmark: bookmark => dispatch(createBookmark(bookmark)),
})

export default connect(mstp, mdtp)(StoryComponent)