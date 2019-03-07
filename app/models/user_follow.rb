# == Schema Information
#
# Table name: user_follows
#
#  id          :bigint(8)        not null, primary key
#  follower_id :integer          not null
#  followed_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class UserFollow < ApplicationRecord

    belongs_to :follower,
        primary_key: :id,
        foreign_key: :follower_id,
        class_name: :User

    belongs_to :followed,
        primary_key: :id,
        foreign_key: :follower_id,
        class_name: :User
end
