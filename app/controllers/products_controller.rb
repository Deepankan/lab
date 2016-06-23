class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy, :change_status]

  # GET /products
  # GET /products.json
  def index
    @products = current_user.products.paginate(:page => params[:page], :per_page => 10)
  end

  # GET /products/1
  # GET /products/1.json
  def show
  end

  # GET /products/new
  def new
    @product = current_user.products.new()
  end

  # GET /products/1/edit
  def edit
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
    @product.destroy
    respond_to do |format|
      format.html { redirect_to products_url, notice: 'Product was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def product_params
      params.require(:product).permit(:product_name,:product_code,:grade,:formula,:molar_mass,{chemical_images: []},:pakaging, :price)
    end
end
