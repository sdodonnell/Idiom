json.extract! @story, :id, :title, :body, :user_id, :title_preview, :body_preview, :created_at, :updated_at

json.photoUrls @story.images.map { |image| polymorphic_url(image) }
