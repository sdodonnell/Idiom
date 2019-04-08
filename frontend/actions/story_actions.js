import * as StoryApiUtil from '../util/stories_api_util';
import { camelizeKeys } from 'humps';

export const RECEIVE_STORIES = 'RECEIVE_STORIES';
export const RECEIVE_STORY = 'RECEIVE_STORY';
export const REMOVE_STORY = 'REMOVE_STORY';
export const RECEIVE_SEARCH_STORIES = 'RECEIVE_SEARCH_STORIES';
export const CLEAR_SEARCH_STORIES = 'CLEAR_SEARCH_STORIES'

const receiveStory = story => ({
    type: RECEIVE_STORY,
    story: camelizeKeys(story)
})

const receiveStories = stories => ({
    type: RECEIVE_STORIES,
    stories: camelizeKeys(stories)
})

const removeStory = id => ({
    type: REMOVE_STORY,
    storyId: id
})

const receiveSearchStories = stories => ({
    type: RECEIVE_SEARCH_STORIES,
    stories: camelizeKeys(stories)
})

export const clearSearchStories = () => ({
    type: CLEAR_SEARCH_STORIES
})

export const fetchStory = id => dispatch => (
    StoryApiUtil.fetchStory(id).then(story => dispatch(receiveStory(story)))
)

export const fetchStoriesByUser = userId => dispatch => (
    StoryApiUtil.fetchStoriesByUser(userId).then(stories => dispatch(receiveStories(stories)))
)
export const fetchFollowedUserStories = () => dispatch => (
    StoryApiUtil.fetchFollowedUserStories().then(stories => dispatch(receiveStories(stories)))
)
export const fetchBookmarkedStories = () => dispatch => (
    StoryApiUtil.fetchBookmarkedStories().then(stories => dispatch(receiveStories(stories)))
)
export const fetchSearchedStories = query => dispatch => (
    StoryApiUtil.fetchSearchedStories(query).then(stories => dispatch(receiveSearchStories(stories)))
)
export const fetchStories = () => dispatch => (
    StoryApiUtil.fetchStories().then(stories => dispatch(receiveStories(stories)))
)
export const createStory = story => dispatch => (
    StoryApiUtil.createStory(story).then(story => dispatch(receiveStory(story)))
)
export const updateStory = story => dispatch => (
    StoryApiUtil.updateStory(story).then(story => dispatch(receiveStory(story)))
)
export const deleteStory = id => dispatch => (
    StoryApiUtil.deleteStory(id).then(story => dispatch(removeStory(story.id)))
)
