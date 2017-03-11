class Auth

  def self.create_token(user)
    payload = { data: JSON.parse(user.to_json) }

    JWT.encode( payload, 'secret', 'HS256')
  end

  def self.decode_token

  end

end
