json.story do
    json.extract! @story, :id, :title, :body, :user_id, :title_preview, :body_preview, :created_at, :updated_at
    json.photoUrls @story.images.map { |image| url_for(image) }
    json.authorId @story.user.id
    json.authorName @story.user.fullname
end


json.comments({})
json.comments do
    @story.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :body, :user_id, :story_id, :updated_at
        end
    end
end

