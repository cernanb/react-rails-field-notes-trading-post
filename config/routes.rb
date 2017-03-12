Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post '/signup', to: 'users#signup'
      post '/login', to: 'sessions#login'
      resources :notebooks, only: [:index]
    end
  end
end
