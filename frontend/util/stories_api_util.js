export const fetchStory = id => (
    $.ajax({
        method: 'GET',
        url: `api/stories/${id}`
    })
)

export const fetchStories = data => (
    $.ajax({
        method: 'GET',
        url: 'api/stories',
        data
    })
)

export const createStory = story => (
    $.ajax({
        method: 'POST',
        url: 'api/stories',
        data: {story}
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
