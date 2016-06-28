class CitiesController < ApplicationController
  before_action :set_city, only: [:show, :edit, :update, :destroy]

  # GET /cities
  # GET /cities.json
  def index
    if @role == ADMIN
    @cities = City.all
    else
      flash[:error] = "Sorry invalid request. "
      redirect_to authenticated_root_path
    end
  end

  # GET /cities/1
  # GET /cities/1.json
  def show

      if @role != ADMIN
      flash[:error] = "Sorry invalid request. "
      redirect_to authenticated_root_path
    end
  end

  # GET /cities/new
  def new
    if @role == ADMIN
     @city = City.new
    else
      flash[:error] = "Sorry invalid request. "
      redirect_to authenticated_root_path
    end
  end

  # GET /cities/1/edit
  def edit
       if @role != ADMIN
        flash[:error] = "Sorry invalid request. "
        redirect_to authenticated_root_path
       end 
  end

  # POST /cities
  # POST /cities.json
  def create
    @city = City.new(city_params)

    respond_to do |format|
      if @city.save
        format.html { redirect_to @city, notice: 'City was successfully created.' }
        format.json { render :show, status: :created, location: @city }
      else
        format.html { render :new }
        format.json { render json: @city.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /cities/1
  # PATCH/PUT /cities/1.json
  def update
    respond_to do |format|
      if @city.update(city_params)
        format.html { redirect_to @city, notice: 'City was successfully updated.' }
        format.json { render :show, status: :ok, location: @city }
      else
        format.html { render :edit }
        format.json { render json: @city.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /cities/1
  # DELETE /cities/1.json
  def destroy
   

    if @role == ADMIN
       @city.destroy
      respond_to do |format|
        format.html { redirect_to cities_url, notice: 'City was successfully destroyed.' }
        format.json { head :no_content }
      end
    else
      flash[:error] = "Sorry invalid request. "
      redirect_to authenticated_root_path
    end

  
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_city
      @city = City.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def city_params
      params.require(:city).permit(:city)
    end
end
