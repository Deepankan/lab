class UserProfile < ActiveRecord::Base
	belongs_to :user
	belongs_to :city
	mount_uploader :avatar, AvatarUploader
end
