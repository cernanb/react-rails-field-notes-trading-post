class Api::V1::UsersController < ApplicationController

  def signup
    user = User.new(user_params)
    if user.save
      render json: { token: Auth.create_token({ id: user.id, username: user.username, email: user.email }) }
    else
      render json: { errors: { message: JSON.parse(user.errors.full_messages.to_json) } }
    end
  end

  private
    def user_params
      params.require(:user).permit(:email, :password, :username)
    end

end
