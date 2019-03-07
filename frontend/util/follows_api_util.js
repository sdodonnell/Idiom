import { decamelizeKeys } from "humps";

export const createFollow = follow => (
    $.ajax({
        method: 'POST',
        url: 'api/user_follows',
        data: {user_follow: decamelizeKeys(follow)}
    })
)

export const deleteFollow = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/user_follows/${id}`,
    })
)