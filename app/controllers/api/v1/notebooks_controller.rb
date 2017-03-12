class Api::V1::NotebooksController < ApplicationController

  def index
    if logged_in?
      render json: Notebook.all
    else
      render json: { errors: { message: "Must have a valid token" } }
    end
  end

end
