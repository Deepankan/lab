class UserMailer < ApplicationMailer
default from: "deepankan.chitragupt786@gmail.com>"
	def forgot_password_mail(mail)

    user = User.find_by_email(mail)
    @reset_token = user.reset_password_token
    @user = user
    # @reset_url = 'http://lin4me.sancustechnologies.com/update?token='+reset_token
    mail(:to => mail, :subject => "Reset password")   
  end
end
