import { decamelizeKeys } from 'humps';

export const fetchStory = id => (
    $.ajax({
        method: 'GET',
        url: `api/stories/${id}`
    })
)

export const fetchStories = userId => (
    $.ajax({
        method: 'GET',
        url: 'api/stories',
        data: {story: {user_id: userId}}
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
        data: story
    })
)

