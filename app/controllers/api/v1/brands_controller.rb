class Api::V1::BrandsController < ApplicationController

    def index
        render json: Brand.all 
    end
end
