class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy, :change_status]
  before_action :get_user,  if: "params[:comapny_id].present?"

  # GET /products
  # GET /products.json
  def index
 
      if params[:comapny_id].present?  
         @products = @user.products.paginate(:page => params[:page], :per_page => 10)
      else
         @products = current_user.products.paginate(:page => params[:page], :per_page => 10)    
      end
      
       
  end

  def search
   if params[:comapny_id].present?
     @products = @user.products.where("lower(product_name) like ? or lower(product_code) like ?", "%#{params[:search].downcase}%","%#{params[:search].downcase}%").order("case when (lower(product_name)) like '#{params[:search]}%' then 1 else 2 end, case when (lower(product_code)) like '#{params[:search]}%' then 1 else 2 end")
   else
     @products = current_user.products.where("lower(product_name) like ? or lower(product_code) like ?", "%#{params[:search].downcase}%","%#{params[:search].downcase}%").order("case when (lower(product_name)) like '#{params[:search]}%' then 1 else 2 end, case when (lower(product_code)) like '#{params[:search]}%' then 1 else 2 end")
   end
     @products = @products.paginate(:page => params[:page], :per_page => 10)
  end



  def all_product
       if params[:comapny_id].present?
            @products = @user.products
      else
          @products = current_user.products
      end
  end
  # GET /products/1
  # GET /products/1.json
  def show
  end

  # GET /products/new
  def new
    if @role != ADMIN
     @product = current_user.products.new()
    else
     flash[:error] = "Sorry invalid request. "
     redirect_to authenticated_root_path
    end
  end

  # GET /products/1/edit
  def edit
   if @role == ADMIN
       flash[:error] = "Sorry invalid request. "
     redirect_to :back
    end
  end

  # POST /products
  # POST /products.json
  def create
    # @product = Product.new(product_params)

    # respond_to do |format|
    #   if @product.save
    #     format.html { redirect_to @product, notice: 'Product was successfully created.' }
    #     format.json { render :show, status: :created, location: @product }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @product.errors, status: :unprocessable_entity }
    #   end
    # end
    if params[:file_upload] 
          file_type = params[:file].content_type
      file_name = ""
      if file_type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' or file_type == "text/csv"
        file_name = "DatabaseManagement.csv"
        file_path = File.join(Rails.root, 'public', file_name)
        File.open(file_path, 'wb') do |f|
           f.write params[:file].read
         end
      end
    fil = ("public/DatabaseManagement.csv")
              batch,batch_size = [], 1_000 
      
            CSV.foreach(fil, :headers => true) do |row|

              batch << current_user.products.new(row.to_hash)

              if batch.size >= batch_size
                current_user.products.import batch
                batch = []
              end
            end
      current_user.products.import batch  
    else
       product = current_user.products.create(product_params)
    end
    ActiveRecord::Base.connection.reconnect!
    ActiveRecord::Base.connection.execute("SELECT remove_products_duplicate();")
    ActiveRecord::Base.connection.reconnect!
    redirect_to products_path
  end

  # PATCH/PUT /products/1
  # PATCH/PUT /products/1.json
  def update
  
      if @product.update(product_params)
        redirect_to products_path
      else
       
       redirect_to :back
      end
   
  end

  # DELETE /products/1
  # DELETE /products/1.json
  def destroy
    if @role != ADMIN
    @product.destroy
    respond_to do |format|
      format.html { redirect_to products_url, notice: 'Product was successfully destroyed.' }
      format.json { head :no_content }
    end
  else
     flash[:error] = "Sorry invalid request. "
     redirect_to :back
  end
  end

  def new_upload_product
      if @role != ADMIN
  
        file_type = params[:file].content_type
        file_name = ""
        if file_type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' or file_type == "text/csv"
          file_name = "DatabaseManagement.csv"
          file_path = File.join(Rails.root, 'public', file_name)
          File.open(file_path, 'wb') do |f|
             f.write params[:file].read
           end
        end
        fil = ("public/DatabaseManagement.csv")
              batch,batch_size = [], 1_000 
      
            CSV.foreach(fil, :headers => true) do |row|

              batch << current_user.products.new(row.to_hash)

              if batch.size >= batch_size
                current_user.products.import batch
                batch = []
              end
            end
      current_user.products.import batch  
       ActiveRecord::Base.connection.reconnect!
      ActiveRecord::Base.connection.execute("SELECT remove_products_duplicate();")
        redirect_to products_path
      else
         flash[:error] = "Sorry invalid request. "
        redirect_to :back
      end
    
  end

 def sample_xls
  @products = ["product_name", "product_code",  "grade", "formula" ,"molar_mass",  "image_url", "pakaging",  "price"]
  respond_to do |format|
        #format.js { render partial: "sample_xls" }
         format.csv { send_data @products.to_csv }
  end
 end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      
      @product = Product.find(params[:id].to_i)
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def product_params
      params.require(:product).permit(:product_name,:product_code,:grade,:formula,:molar_mass,{chemical_images: []},:pakaging, :price)
    end

    def get_user
      @user = User.find_by_id(params[:comapny_id])
    end
end
