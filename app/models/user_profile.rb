class UserProfile < ActiveRecord::Base
	belongs_to :user
	has_one :city
	mount_uploader :avatar, AvatarUploader
end
