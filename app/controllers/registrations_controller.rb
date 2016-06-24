class RegistrationsController < Devise::RegistrationsController
  before_action :get_cities, only: [:new,:edit]
  def new
    
  	@user = User.new(role_id: User.set_role.id )
    
     @user_profile = @user.build_user_profile
    
    super
  end

  def create
  
    @user = User.new(user_params)
    
    @user.role_id =  User.set_role.id

    @user.save
    @user.create_user_profile(params[:user][:user_profile].permit!) 
    # add custom create logic here
    redirect_to sign_out_path
  end
  def edit
    @user_profile = @user.user_profile
  end
  def update
     begin  
      
     @user.update_attributes(user_params)
      @user.user_profile.update_attributes(params[:user][:user_profile].permit!)
    redirect_to authenticated_root_path
    rescue Exception => e
      flash[:error] = e
       redirect_to :back
    end
 
    
 
  #  super
  end

   def user_params
      params.require(:user).permit(:email, :password, :password_confirmation, :user_name, :mobile_no, user_profile_attributes: [:name,:city_id,:address,:comapny_code,:fax,:avatar])
    end
end 