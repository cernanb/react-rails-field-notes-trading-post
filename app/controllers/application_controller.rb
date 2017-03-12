class ApplicationController < ActionController::API

  def logged_in?
    !!now_user
  end

  def now_user
    @now_user ||= User.find(auth.first["user"]["id"])
  end

  private
    def token
      request.env["HTTP_AUTHORIZATION"]
    end

    def auth
      Auth.decode_token(token)
    end

end
