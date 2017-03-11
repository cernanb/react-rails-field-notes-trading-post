Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post '/signup', to: 'api/v1/controllers#signup'
      post '/login', to: 'api/v1/controllers#login'
    end
  end
end
