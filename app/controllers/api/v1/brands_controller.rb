class Api::V1::BrandsController < ApplicationController
    def new
      @brand = Brand.new
    end

    def index
      render json: Brand.all 
    end

    def create
      if logged_in?
        @brand = Brand.new(brand_params)
        if @brand.save
          render json: @brand
        else
          render json: { error: { message: "Unable to create brand!"} }, status: 500
        end
      else
        render json: { error: { message: "You must have a valid token!"} }, status: 500
      end
    end


    private

    def brand_params
      params.require('brand').permit(:name, :photo_url)
    end
end
