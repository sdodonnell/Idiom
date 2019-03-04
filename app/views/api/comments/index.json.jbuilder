@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :body, :user_id, :story_id, :updated_at
    end
end