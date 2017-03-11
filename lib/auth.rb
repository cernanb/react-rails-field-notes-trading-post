class Auth

  def self.create_token(user)
    payload = { data: JSON.parse(user.to_json) }

    JWT.encode( payload, ENV['AUTH_SECRET'], ENV['AUTH_HASH_ALGO'])
  end

  def self.decode_token(token)
    JWT.decode(token, ENV['AUTH_SECRET'], true, { :algorithm => ENV['AUTH_HASH_ALGO'] })
  end

end
