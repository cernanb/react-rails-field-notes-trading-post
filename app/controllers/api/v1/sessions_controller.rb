class Api::V1::SessionsController < ApplicationController

  def login
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      user_object = { id: user.id, username: user.username, email: user.email }
      render json: { token: Auth.create_token(user_object), profile: user_object }
    else
      render json: { errors: { message: 'Username or Password is incorrect' } }
    end
  end


end
