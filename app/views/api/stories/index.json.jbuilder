@stories.each do |story|
    json.set! story.id do
        json.extract! story, :id, :title, :body, :title_preview, :body_preview, :user_id, :publish_date
        json.authorId story.user.id
        json.authorName story.user.fullname
    end
end