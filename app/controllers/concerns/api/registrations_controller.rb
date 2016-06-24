class Api::RegistrationsController < Api::ApiController
  before_action :restrict_access, except: [ :sign_in, :forgot_password, :sign_up, :get_city_role]

  # Objective: This is method for signin
  # URL: /api/registrations/sign_in => PUT request
  # Input: email/user_name/mobile_no and password 
  # Output: success or unsuccess message
  def get_city_role
    city = City.get_list_city
    role = Role.get_list_role
    if city or role
       msg = { status: STATUS_SUCCESS,cities: city, roles: role, message: CREDENTIAL_ERROR_MSG }
    else
      msg = {status: STATUS_ERROR, message: "Something went wrong. Please try after sometime"}
    end
    render json: msg
  end


# Objective: This is method for signup
  # URL: /api/sign_up => POST request
  # Input: ALL User information
  # Output: success or unsuccess message
  def sign_up

    if params[:email].present? and params[:password].present? and params[:confirm_password].present? and \
       params[:password] == params[:confirm_password] and params[:user_name].present?\
      and params[:city_id].present? and params[:name].present?  
      and params[:role_id].present?
      begin
       user = User.create(email: params[:email],password: params[:password], encrypted_password: BCrypt::Password.create(params[:password]), user_name: params[:user_name], mobile_no: params[:mobile_no], role_id: params[:role_id], status: STATUS_SUCCESS)
       token = AccessToken.create!
       user.access_tokens << token
       
       user.devise_infos.create(devise_id: params[:devise_id], gcm_key: params[:gcm_key], apn_key: params[:apn_key])     
       user.create_user_profile(city_id: params[:city_id], name: params[:name], address: params[:address],\
         company_code: params[:company_code], fax: params[:fax])
        status = STATUS_SUCCESS
        msg = "User created sucessfully."
        @msg = {status: status,token: token.token, user_type: user.role.role_type, profile: user.get_profile,  message: msg}
      rescue Exception => e
         user.really_destroy! if user and (message = user.errors.full_messages if user.errors.full_messages.present?)
         token.destroy if token and (message = token.errors.full_messages if token.errors.full_messages.present?)
         user.devise_infos.destroy_all if user and user.devise_infos 
         user.user_profile.destroy if user and  user_profile
         message =  message.present? ?  message.join(",") : "Something went wrong. Please try after sometime"
         @msg = {status: STATUS_ERROR, message: message}
      end
    else
      @msg = {status: STATUS_ERROR, message: "Something went wrong. Please try after sometime"}
    end
     render json: @msg
  end

  # Objective: This is method for signin
  # URL: /api/sign_in => POST request
  # Input: email/user_name/mobile_no and password 
  # Output: success or unsuccess message
  def sign_in
      if params[:user] and params[:password] and (user = (User.find_by_email(params[:user])  or User.find_by_mobile_no(params[:user]))) and user.status == true and [DEALER,CUSTOMER].include?(user.role.role_type)
  
      #cipher = Gibberish::AES.new(user.security_token)  
      user_type  = user.get_role  
       if  BCrypt::Password.new(user.encrypted_password) == params[:password]
          token = AccessToken.create!
          # user.api_key << token
          user.access_tokens << token
          user.save
          user.devise_infos.create(devise_id: params[:devise_id], gcm_key: params[:gcm_key], apn_key: params[:apn_key])     
          msg = {status: 1, token: token.token, user_type: user_type, profile: user.get_profile, message: LOGIN_MSG}
          # msg =  token.token
          render json: msg
       else
          msg = { status: 0, message: CREDENTIAL_ERROR_MSG }
          render json: msg
       end   
     
    else
      msg = { status: 0, message: CREDENTIAL_ERROR_MSG }
      render json: msg
     
    end
    #TODO 
  end
 


  # Objective: This is method for signout
  # URL: /api/registrations/sign_out 
  # Input: Token
  # Output: success or unsuccess message
  def sign_out
    authenticate_or_request_with_http_token do |token, options|
      user = AccessToken.find_by_token(token).user
      token = AccessToken.find_by(token: token)
      token.destroy unless token.nil?
      # app_detail = get_query_detail(user, 'user_app_details',"find_by","devise_id: '#{params[:devise_id]}'")
      # app_detail.destroy 
    end
    msg = { status: 1, message: LOGOUT_MSG }
    render json: msg
  end
  
    def forgot_password
    #TODO
    if params[:user].present? and user = User.find_by_email(params[:user])
     user.update(reset_password_token: SecureRandom.hex, reset_password_sent_at: 24.hours.from_now, active: 0)
     @reset_token = user.reset_password_token
      begin
        UserMailer.forgot_password_mail(params[:user]).deliver
        render json: { status: 1, message:  FORGET_PASS_EMAIL}
      rescue Net::SMTPAuthenticationError, Net::SMTPServerBusy, Net::SMTPSyntaxError, Net::SMTPFatalError, Net::SMTPUnknownError => e
        render json: { status: 0, message: CREDENTIAL_ERROR_MSG }
      end
    else
       render json: { status: 0, message:  CREDENTIAL_ERROR_MSG}
    end
  end
  

    def reset_password
    if params[:old_password].present? and params[:new_password].present? and params[:old_password] != params[:new_password] and BCrypt::Password.new(current_user.encrypted_password) == params[:old_password]
      current_user.update(encrypted_password: BCrypt::Password.create(params[:new_password]))
      render json: { status: 1, message: RESET_PASSWORD_MSG }
    else
      render json: { status: 0, message: CREDENTIAL_ERROR_MSG }
    end
  end

end