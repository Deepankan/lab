class Api::ApiController < ActionController::Base
	 skip_before_filter :verify_authenticity_token
   helper_method :current_user


	def current_user
    # Note: we want to use "find_by_id" because it's OK to return a nil.
    # If we were to use User.find, it would throw an exception if the user can't be found.
    # @current_user ||= User.find_by_id(session[:user_id]) if session[:user_id]
    authenticate_or_request_with_http_token do |token, options|
      @current_user = AccessToken.find_by_token(token).user if AccessToken.find_by_token(token)
      AccessToken.exists?(token: token) 
    end
    return @current_user
  end



   def restrict_access
    authenticate_or_request_with_http_token do |token, options|
      user = AccessToken.find_by_token(token).user if AccessToken.find_by_token(token)
      AccessToken.exists?(token: token) 
    end
  end
 
  def get_role
    if current_user
      @role = current_user.get_role
    end
  end


  def get_error_message(val)
   errors = []
   val.each do |key, array|
     array.each do |h|
       errors << h
     end
   end
   errors
  end

end