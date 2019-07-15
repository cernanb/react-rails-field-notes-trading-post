class Api::V1::NotebooksController < ApplicationController
  before_action :set_notebook, only: [:show]

  def index
    if logged_in?
      if params[:user_id]
        render json: UserNotebookSerializer.new(now_user.user_notebooks).serialized_json
      else
        render json: NotebookSerializer.new(Notebook.all).serialized_json
      end
    else
      render json: { error: { message: "You must have a valid token!"} }, status: 500
    end
  end

  def show
    if logged_in?
      render json: @notebook
    else
      render json: { error: { message: "You must have a valid token!"} }, status: 500
    end
  end

  def create
    if logged_in?
      @notebook = Notebook.new(notebook_params)
      if @notebook.save
        render json: @notebook
      else
        render json: { error: { message: "Unable to create notebook!"} }, status: 500
      end
    else
      render json: { error: { message: "You must have a valid token!"} }, status: 500
    end
  end

  private

    def set_notebook
      @notebook = Notebook.find(params[:id])
    end

    def notebook_params
      params.require('notebook').permit(:name, :photo_url, :brand_id)
    end

end
