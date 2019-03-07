Rails.application.routes.draw do

  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :stories, except: [:new]
    resources :comments, only: [:create, :index, :destroy]
    resources :bookmarks, only: [:index, :create, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :user_follows, only: [:create, :destroy]
  end
  
end
