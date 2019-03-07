# == Schema Information
#
# Table name: stories
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  body       :text             not null
#  topic      :string
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Story < ApplicationRecord
    validates :title, :body, :user_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :comments,
        primary_key: :id,
        foreign_key: :story_id,
        class_name: :Comment

    has_many :tags,
        primary_key: :id,
        foreign_key: :story_id,
        class_name: :Tag

    has_many :bookmarks,
        primary_key: :id,
        foreign_key: :story_id,
        class_name: :Bookmark

    has_one_attached :image
end
