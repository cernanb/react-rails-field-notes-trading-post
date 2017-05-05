class Api::V1::UsersController < ApplicationController

  def signup
    user = User.new(user_params)
    if user.save
      user_object = { id: user.id, username: user.username, email: user.email, admin: user.admin? }
      render json: { token: Auth.create_token(user_object), profile: user_object }
    else
      render json: { errors: { message: JSON.parse(user.errors.full_messages.to_json) } }
    end
  end

  private
    def user_params
      params.require(:user).permit(:email, :password, :username)
    end

end
