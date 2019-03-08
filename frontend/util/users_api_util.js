export const fetchUser = id => (
    $.ajax({
        method: 'GET',
        url: `api/users/${id}`
    })
)

export const fetchUsers = (storyId) => (
    $.ajax({
        method: 'GET',
        url: 'api/users/',
        data: {storyId}
    })
)

export const fetchUserByStory = storyId => {
    return (
        $.ajax({
            method: 'GET',
            url: 'users/story',
            data: {story_id: storyId}
        })
    )
}
