Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get '/signup', to: 'api/v1/controllers#signup'
      get '/login', to: 'api/v1/controllers#login'
    end
  end
end
