class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :authenticate_user!, except: [:after_sign_in_path_for, :about_us, :contact_us, :visitors, :list_products, :index, :search, :show, :term_condition]
 # before_action :configure_permitted_parameters, if: :devise_controller?
  before_filter :get_role
 # def after_sign_in_path_for(resource_or_scope)   
 #    case @role
 #      when ADMIN 
 #      	admin_root_path
 #      when COMPANY 
 #      	product_details_path
 #      else
 #        sign_out_path
 #      end	
    
 #  end  

  def get_role
    if current_user
      @role = current_user.get_role
    end
  end

  def get_cities
    
    @cities = City.get_city
  end
 protected
  def after_sign_in_path_for(resource)
    if LOGIN_USER.include?(current_user.role.role_type)
      authenticated_root_path
    else
      flash[:error] = "Password changed Successfully.Sorry,you are not authorized to acces web portal."
      sign_out current_user
      root_path
    end
  end
  # def configure_permitted_parameters

  # devise_parameter_sanitizer.permit(:sign_up) do |user_params|
  #   user_params.permit(:email, :password, :password_confirmation)
  # end
  # end
end
