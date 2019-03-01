@stories.each do |story|
    json.set! story.id do
        json.extract! story, :id, :title, :body, :title_preview, :body_preview, :user_id, :created_at, :updated_at
    end
end