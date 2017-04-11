class UserMailer < ApplicationMailer
default from: "deepankan.chitragupt786@gmail.com"
	def forgot_password_mail(mail)

    user = User.find_by_email(mail)
    @reset_token = user.reset_password_token
    @user = user
    # @reset_url = 'http://lin4me.sancustechnologies.com/update?token='+reset_token
    mail(:to => mail, :subject => "Reset password")   
  end

  def contact_detail(params)
  	@name = params[:name]
  	@email = params[:email]
  	@website_url = params[:website_url]
  	@comment = params[:comment]

    # @reset_url = 'http://lin4me.sancustechnologies.com/update?token='+reset_token
    mail(:to => "deepankan.chitragupt786@gmail.com", :subject => "New Message for website")   
  end
end
