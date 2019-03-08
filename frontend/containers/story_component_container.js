import { connect } from 'react-redux';
import StoryComponent from '../components/Story/story_component';
import { fetchStory } from '../actions/story_actions';
import { createLike } from '../actions/like_actions';
import { createBookmark } from '../actions/bookmark_actions'
import { createFollow } from '../actions/follow_actions';

const mstp = (state, ownProps) => {
    let storyId = ownProps.match.params.id;
    const story = state.entities.stories[storyId]
    const currentUser = state.entities.users[state.session.id]
    return ({
        story,
        storyId,
        currentUser,
        bookmarks: state.entities.bookmarks,
        likes: state.entities.likes
    })
}

const mdtp = dispatch => ({
    fetchStory: id => dispatch(fetchStory(id)),
    addLike: like => dispatch(createLike(like)),
    addBookmark: bookmark => dispatch(createBookmark(bookmark)),
    addFollow: follow => dispatch(createFollow(follow))
})

export default connect(mstp, mdtp)(StoryComponent)