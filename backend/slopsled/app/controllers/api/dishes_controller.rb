class Api::DishesController < ApplicationController
  before_action :set_dish, only: [:show, :update, :destroy]

  # GET /dishes
  def index
    dishes = Dish.all
    render json: DishSerializer.new(dishes)
  end

  # GET /dishes/1
  def show
    render json: DishSerializer.new(@dish)
  end

  # Routes below are not needed in the apps current form, but would be needed if an admin was added to the app

  # # POST /dishes
  # def create
  #   @dish = Dish.new(dish_params)

  #   if @dish.save
  #     render json: @dish, status: :created, location: @dish
  #   else
  #     render json: @dish.errors, status: :unprocessable_entity
  #   end
  # end

  # # PATCH/PUT /dishes/1
  # def update
  #   if @dish.update(dish_params)
  #     render json: @dish
  #   else
  #     render json: @dish.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /dishes/1
  # def destroy
  #   @dish.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dish
      @dish = Dish.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def dish_params
      params.require(:dish).permit(:name, :description, :price, :image, :restaurant_id)
    end
end
