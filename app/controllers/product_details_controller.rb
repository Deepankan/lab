class ProductDetailsController < ApplicationController
  before_action :set_product_detail, only: [:show, :edit, :update, :destroy]
  before_action :set_pricing_detail, only: [:edit_pricing,:update_pricing,:delete_pricing]
  # GET /product_details
  # GET /product_details.json
  def index
    case @role
    when ADMIN
    
    when COMPANY
      @product_details = current_user.product_details

    end
   
  end
  def upload_file
  end

  def import_file
    file_type = params[:file].content_type
    file_name = ""
    if file_type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' or file_type == "application/vnd.ms-excel"
      file_name = "DatabaseManagement.xlsx"
      file_path = File.join(Rails.root, 'public', file_name)
      File.open(file_path, 'wb') do |f|
         f.write params[:file].read
       end
    end
  file = ("public/DatabaseManagement.xlsx")
   s = Roo::Excelx.new(file)
  product_cell_with_id ={}
   all_product = ProductDetail.pluck(:product_name,:product_code,:grade,:formula,:molar_mass).flatten

    s.sheets.each do |sheet|

      if sheet.upcase == 'PRODUCT'
        puts "\nCreating Product................................."
          begin
            s.default_sheet = sheet
            fr = s.first_row.to_i
            trav_col = fc = s.first_column.to_i
            lr = s.last_row.to_i
            lc = s.last_column.to_i
            trav_row = fr + 1
              while trav_row <= lr do
                serial_no = s.cell(trav_row, trav_col).to_i

                #country_name = s.cell(trav_row, trav_col + 2 )
                #country_code  = s.cell(trav_row, trav_col + 3 )
                product_name = s.cell(trav_row, trav_col)
                product_code = s.cell(trav_row, trav_col+1)
                grade = s.cell(trav_row, trav_col+2)
                formula =  s.cell(trav_row, trav_col+3)
                molar_mass = s.cell(trav_row, trav_col+4)
                image_url = s.cell(trav_row, trav_col+5)
                pakaging = s.cell(trav_row, trav_col+6)
                price = s.cell(trav_row, trav_col+7)
                  if product_id = ProductDetail.find_by(product_name: product_name,product_code: product_code, grade: grade, formula: formula, molar_mass: molar_mass)
                        if !product_id.product_pricings.find_by(pakaging: pakaging, price: price)
                            product_id.product_pricings.create(pakaging: pakaging, price: price)
                        end
                  else  
                  
                   product_details = ProductDetail.new(user_id: current_user.id, product_name: product_name,product_code: product_code, grade: grade, formula: formula, molar_mass: molar_mass)
                   product_details.save
                   product_details.product_pricings.create(pakaging: pakaging, price: price)

                  end
                trav_row = trav_row + 1
              end
          end
         end
       end 


   redirect_to product_details_path

  end
  # GET /product_details/1
  # GET /product_details/1.json
  def show
  end

  # GET /product_details/new
  def new
    @product_detail = current_user.product_details.new
    @product_pricing = @product_detail.product_pricings.build

  end

  # GET /product_details/1/edit
  def edit
  end

  # POST /product_details
  # POST /product_details.json
  def create
    if product= current_user.product_details.find_by(product_name: params[:product_detail][:product_name],product_code: params[:product_detail][:product_code], grade: params[:product_detail][:grade], formula: params[:product_detail][:formula],molar_mass: params[:product_detail][:molar_mass])
       product.product_pricings.create(params[:product_detail][:product_pricing].permit!)
    else
       @product_detail = current_user.product_details.new(product_detail_params)
       @product_detail.save
       @product_detail.product_pricings.create(params[:product_detail][:product_pricing].permit!)
    end
    redirect_to product_details_path

    # respond_to do |format|
    #   if @product_detail.save
    #     format.html { redirect_to @product_detail, notice: 'Product detail was successfully created.' }
    #     format.json { render :show, status: :created, location: @product_detail }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @product_detail.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # PATCH/PUT /product_details/1
  # PATCH/PUT /product_details/1.json
  def update
   
    respond_to do |format|
      if  @product_detail.update(params[:product_detail].permit!)
        format.html { redirect_to product_details_path, notice: 'Product detail was successfully updated.' }
        format.json { render :show, status: :ok, location: @product_detail }
      else
        format.html { render :edit }
        format.json { render json: @product_detail.errors, status: :unprocessable_entity }
      end
    end
  end
def edit_pricing

end
def update_pricing
  @product_pricing.update(params[:product_pricing].permit!)
redirect_to product_details_path
end
def delete_pricing
  @product_pricing.destroy
  redirect_to product_details_path
end
  # DELETE /product_details/1
  # DELETE /product_details/1.json
  def destroy
    @product_detail.destroy
    respond_to do |format|
      format.html { redirect_to product_details_path, notice: 'Product detail was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
 def sample_xls
  respond_to do |format|
        #format.js { render partial: "sample_xls" }
        format.xls
  end
 end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product_detail
      @product_detail = ProductDetail.find(params[:id])
    end
    def set_pricing_detail
      @product_pricing = ProductPricing.find(params[:id])
    end  
    # Never trust parameters from the scary internet, only allow the white list through.
    def product_detail_params
      #params.fetch(:product_detail, {})
      params.require(:product_detail).permit(:product_name,:product_code,:grade,:formula,:molar_mass,{product_images: []}, product_pricings_attributes: [:pakaging, :price])
    end
end
