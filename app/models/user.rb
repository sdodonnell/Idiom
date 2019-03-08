# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#


class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    before_validation :ensure_session_token

    has_many :stories,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Story
  
    has_many :comments,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Comment
    
    has_many :bookmarks,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Bookmark

    has_many :likes,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Like
    
    has_many :follower_user_follows,
        primary_key: :id,
        foreign_key: :follower_id,
        class_name: :UserFollow
    
    has_many :followed_user_follows,
        primary_key: :id,
        foreign_key: :followed_id,
        class_name: :UserFollow

    has_many :followers,
        through: :followed_user_follows,
        source: :follower

    has_many :following,
        through: :follower_user_follows,
        source: :followed

    has_many :followed_stories,
        through: :following,
        source: :stories

    has_many :bookmarked_stories,
        through: :bookmarks,
        source: :story

    attr_reader :password

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return user if user && user.is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        save
        session_token
    end

end
