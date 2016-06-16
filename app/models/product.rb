class Product < ActiveRecord::Base
	belongs_to :user
acts_as_paranoid
mount_uploaders :chemical_images, ChemicalImageUploader
end
