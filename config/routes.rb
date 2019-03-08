Rails.application.routes.draw do

  root 'static_pages#root'

  get 'stories/following', to: 'api/stories#followed_stories_index'
  get 'stories/bookmarked', to: 'api/stories#bookmarked_stories_index'
  get 'users/story', to: 'api/users#story_user_show'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :stories, except: [:new]
    resources :comments, only: [:create, :index, :destroy]
    resources :bookmarks, only: [:index, :create, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :user_follows, only: [:index, :create, :destroy]
  end
  
end
