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
end
