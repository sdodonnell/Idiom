Rails.application.routes.draw do

  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :stories, except: [:new]
    resources :comments, only: [:create, :index, :destroy]
  end
  
end
