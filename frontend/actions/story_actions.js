import * as StoryApiUtil from '../util/stories_api_util';
import { camelizeKeys } from 'humps';

export const RECEIVE_STORIES = 'RECEIVE_STORIES';
export const RECEIVE_STORY = 'RECEIVE_STORY';
export const CREATE_STORY = 'CREATE_STORY';
export const REMOVE_STORY = 'REMOVE_STORY';
export const UPDATE_STORY = 'UPDATE_STORY'

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

export const fetchStory = id => dispatch => (
    StoryApiUtil.fetchStory(id).then(story => dispatch(receiveStory(story)))
)
export const fetchStories = userId => dispatch => (
    StoryApiUtil.fetchStories(userId).then(stories => dispatch(receiveStories(stories)))
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