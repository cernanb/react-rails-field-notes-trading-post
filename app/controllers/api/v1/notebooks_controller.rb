class Api::V1::NotebooksController < ApplicationController

  def index
    if logged_in?
      render json: Notebook.all
    else
      render json: { error: { message: "You must have a valid token!"} }, status: 500
    end
  end

end
