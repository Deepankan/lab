class AdvertisementsController < ApplicationController
  before_action :set_advertisement, only: [:show, :edit, :update, :destroy, :change_status, :get_advertisement, :update_advertisement]

  # GET /advertisements
  # GET /advertisements.json
  def index
    case @role
     when ADMIN
      @advertisements = Advertisement.all.paginate(:page => params[:page])
     when COMPANY
      @advertisements = current_user.advertisements.paginate(:page => params[:page], :per_page => 10)
     when DEALER
     when CUSTOMER
     end
    
  end

  # GET /advertisements/1
  # GET /advertisements/1.json
  def show
  end

  # GET /advertisements/new
  def new
    @advertisement = current_user.advertisements.new
  end

  # GET /advertisements/1/edit
  def edit
  end

  # POST /advertisements
  # POST /advertisements.json
  def create
    @advertisement = current_user.advertisements.new(advertisement_params)
    @advertisement.status = INACTIVE
    respond_to do |format|
      if @advertisement.save
        format.html { redirect_to @advertisement, notice: 'Advertisement was successfully created.' }
        format.json { render :show, status: :created, location: @advertisement }
      else
        format.html { render :new }
        format.json { render json: @advertisement.errors, status: :unprocessable_entity }
      end
    end
  end
  def new_advertisement
     @advertisement = current_user.advertisements.create(title: params[:title], description: params[:description], web_url: params[:web_url], start_date: params[:start_date], end_date: params[:end_date], images: [params[:images]])
     if  @advertisement
          redirect_to advertisements_path
     else
          redirect_to :back
     end
    
  end
  # PATCH/PUT /advertisements/1
  # PATCH/PUT /advertisements/1.json

  def get_advertisement
     return render partial: "edit_advertisement"
  end

  def update_advertisement

   #@advertisement.update_attributes(params.permit(:title, :description, :web_url, :start_date, :end_date))
   @advertisement.title = params[:title]
   @advertisement.description = params[:description]
   @advertisement.web_url = params[:web_url]
   @advertisement.start_date = params[:start_date]
   @advertisement.end_date = params[:end_date]
   @advertisement.images =  [params[:images] ]if params[:images].present?
   @advertisement.save
   
   redirect_to advertisements_path
  end
  
  def update
     @advertisement.status = INACTIVE
    respond_to do |format|
      if @advertisement.update(advertisement_params)
        format.html { redirect_to @advertisement, notice: 'Advertisement was successfully updated.' }
        format.json { render :show, status: :ok, location: @advertisement }
      else
        format.html { render :edit }
        format.json { render json: @advertisement.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /advertisements/1
  # DELETE /advertisements/1.json
  def destroy
    @advertisement.destroy
    respond_to do |format|
      format.html { redirect_to advertisements_url, notice: 'Advertisement was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
    def change_status
    status = params[:status] == ACTIVE ? INACTIVE : ACTIVE
    @advertisement.update_attributes({status: status})
    redirect_to @advertisement, notice: 'Advertisement was successfully updated.'

  end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_advertisement
      @advertisement = Advertisement.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def advertisement_params
      params.require(:advertisement).permit(:title, :description, :web_url, :start_date, :end_date, {images: []})
    end
end
