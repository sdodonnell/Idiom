json.extract! @user, :id, :username, :email, :fullname, :bookmarks, :likes, :followed_user_follows

json.bookmarks({})
json.bookmarks do
    @user.bookmarks.each do |bookmark|
        json.set! bookmark.id do
            json.extract! bookmark, :user_id, :story_id
        end
    end
end

json.follows({})
json.follows do
    @user.followed_user_follows.each do |follow|
        json.set! follow.id do
            json.extract! follow, :follower_id, :followed_id
        end
    end
end