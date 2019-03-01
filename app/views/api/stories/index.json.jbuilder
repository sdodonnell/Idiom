@stories.each do |story|
    json.set! story.id do
        json.extract! story, :id, :title, :body, :tags, :title_preview, :body_preview, :user_id
    end
end