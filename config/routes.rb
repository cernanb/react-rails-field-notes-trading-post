Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post '/signup', to: 'users#signup'
      post '/login', to: 'sessions#login'
      resources :notebooks, only: [:index, :show, :create]
      resources :users do
        resources :notebooks, only: [:index]
      end
      resources :notebooks, only: [:show] 
      resources :user_notebooks, only: [:create, :index]
      resources :brands, only: [:index, :create, :new]
    end
  end

  # resources :brands, only: [:new]
end
