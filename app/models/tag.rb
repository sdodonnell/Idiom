class Tag < ApplicationRecord
    validates :name, :story_id, presence: true

    belongs_to :story,
        primary_key: :id,
        foreign_key: :story_id,
        class_name: :Story
end
