class Api::V1::UserNotebooksController < ApplicationController
  def create
    user_notebook = now_user.user_notebooks.build(user_notebook_params)  
    if user_notebook.save
      render json: UserNotebookSerializer.new(user_notebook).serialized_json
    else
      render json: { errors: { message: 'Cannot add notebook to your collection' } }, status: 422
    end
  end

  def index
    if logged_in?
      if params[:user_id]
        render json: UserNotebookSerializer.new(now_user.user_notebooks, include: [:notebook]).serialized_json
      else
        render json: Notebook.all
      end
    else
      render json: { error: { message: "You must have a valid token!"} }, status: 500
    end
  end

  private
    def user_notebook_params
      params.require(:user_notebook).permit(:quantity, :status, :notebook_id)
    end
end
