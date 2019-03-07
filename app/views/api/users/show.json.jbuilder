json.extract! @user, :id, :username, :email, :fullname, :bookmarks, :likes

json.bookmarks({})
json.bookmarks do
    @user.bookmarks.each do |bookmark|
        json.set! bookmark.id do
            json.extract! bookmark, :user_id, :story_id
        end
    end
end
