class Api::V1::UserNotebooksController < ApplicationController
  def create
    user_notebook = now_user.user_notebooks.build(notebook_id: params[:notebook_id])  
    if user_notebook.save
      render json: user_notebook
    else
      render json: { errors: { message: 'Cannot add notebook to your collection' } }, status: 422
    end
  end

end
