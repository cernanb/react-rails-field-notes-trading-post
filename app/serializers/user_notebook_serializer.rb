# module Api
  # module V1
    class UserNotebookSerializer
      include FastJsonapi::ObjectSerializer
      attributes :quantity, :status
      set_key_transform :camel_lower 
      belongs_to :notebook
    end
#   end
# end
