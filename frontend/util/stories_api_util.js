import { decamelizeKeys } from 'humps';

export const fetchStory = id => (
    $.ajax({
        method: 'GET',
        url: `api/stories/${id}`
    })
)

export const fetchStories = () => (
    $.ajax({
        method: 'GET',
        url: 'api/stories',
    })
)

export const fetchStoriesByUser = userId => (
    $.ajax({
        method: 'GET',
        url: 'api/stories',
        data: {story: {user_id: userId}}
    })
)

export const fetchFollowedUserStories = () => (
    $.ajax({
        method: 'GET',
        url: 'stories/following'
    })
)

export const fetchBookmarkedStories = () => (
    $.ajax({
        method: 'GET',
        url: 'stories/bookmarked'
    })
)

export const createStory = story => (
    $.ajax({
        method: 'POST',
        url: 'api/stories',
        data: {story: decamelizeKeys(story)}
    })
)

export const deleteStory = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/stories/${id}`,
    })
)
export const updateStory = story => (
    $.ajax({
        method: 'PATCH',
        url: `api/stories/${story.id}`,
        data: {story: decamelizeKeys(story)}
    })
)
