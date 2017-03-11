Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post '/signup', to: 'sessions#signup'
      post '/login', to: 'sessions#login'
    end
  end
end
