class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :authenticate_user!
 # before_action :configure_permitted_parameters, if: :devise_controller?
  before_filter :get_role
 def after_sign_in_path_for(resource_or_scope)   
  binding.pry
    case @role
      when ADMIN 
      	admin_root_path
      when COMPANY 
      	product_details_path
      end	
    
  end  

  def get_role
    if current_user
      @role = current_user.get_role
    end
  end

  def get_cities
    
    @cities = City.get_city
  end
 protected

  # def configure_permitted_parameters

  # devise_parameter_sanitizer.permit(:sign_up) do |user_params|
  #   user_params.permit(:email, :password, :password_confirmation)
  # end
  # end
end
