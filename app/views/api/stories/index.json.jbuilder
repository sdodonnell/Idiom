@stories.each do |story|
    json.set! story.id do
        json.extract! story, :id, :title, :body, :title_preview, :body_preview, :user_id, :created_at, :updated_at
        json.photoUrls story.images.map { |image| url_for(image) }
        json.authorId story.user.id
        json.authorName story.user.fullname
    end
end