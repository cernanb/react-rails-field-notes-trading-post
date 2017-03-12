class ApplicationController < ActionController::API

  def logged_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by_id(auth.first["user"]["id"])
  end

  private
    def token
      request.env["HTTP_AUTHORIZATION"]
    end

    def auth
      Auth.decode_token(token)
    end

end
