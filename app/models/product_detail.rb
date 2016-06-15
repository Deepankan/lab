class ProductDetail < ActiveRecord::Base
	belongs_to :user
	has_many :product_pricings
	acts_as_paranoid
	mount_uploaders :product_images, ProductImagesUploader
	accepts_nested_attributes_for :product_pricings
end
