import { decamelizeKeys } from "humps";

export const createBookmark = bookmark => (
    $.ajax({
        method: 'POST',
        url: 'api/bookmarks',
        data: {bookmark: decamelizeKeys(bookmark)}
    })
)

export const deleteBookmark = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/bookmarks/${id}`,
    })
)