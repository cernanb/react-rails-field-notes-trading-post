class NotebookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :id, :photo_url, :edition, :brand_id
  set_key_transform :camel_lower 

  # attribute :sealed do |object|
  #   now_user.username
  # end
end
