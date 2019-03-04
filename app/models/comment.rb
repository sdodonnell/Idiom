# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  body       :text             not null
#  user_id    :integer          not null
#  story_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
    validates :body, :user_id, :story_id, presence: true

    belongs_to :story,
        primary_key: :id,
        foreign_key: :story_id,
        class_name: :Story

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
