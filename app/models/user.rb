class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_one :user_profile
  belongs_to :role
  has_many :access_tokens
  has_many :advertisements 
  has_many :product_details
  has_many :products
  has_many :devise_infos
  acts_as_paranoid      
  accepts_nested_attributes_for :user_profile
  scope :get_company_name, -> {where(role_id: Role.find_by_role_type(COMPANY))}
  def get_role
    self.role.role_type
  end

  def self.set_role
  
     Role.find_by_role_type(COMPANY)
  end

  def get_profile
    up ={}
    user_profile = self.user_profile if self.user_profile
    up = {email: self.email, mobile_no: self.mobile_no, user_name: self.user_name, city: user_profile.city.city, name: user_profile.name, address: user_profile.address, company_code: user_profile.company_code, fax: user_profile.fax, image: user_profile.avatar.url} if user_profile
  end

  def get_count(role)
    
    case role
    when ADMIN
     prod= {comapany_name: self.try(:user_name), image: self.user_profile.try(:avatar), representative_name: self.try(:user_profile).try(:name),mobile_no: self.mobile_no, email: self.email, product_count: Product.all.count, advertisement_count: Advertisement.all.count}
    when COMPANY
     prod= {comapany_name: self.try(:user_name), image: self.user_profile.try(:avatar), representative_name: self.try(:user_profile).try(:name),mobile_no: self.mobile_no, email: self.email, product_count: self.products.count, advertisement_count: self.advertisements.count}
    when DEALER
    when CUSTOMER
    end
    
      prod
  end

  def self.get_count(id)
    user = User.find_by_id(id)
    prod= {comapany_name: user.try(:user_name), image: user.try(:user_profile).try(:avatar), representative_name: user.try(:user_profile).try(:name),mobile_no: user.try(:mobile_no), email: user.try(:email), product_count: user.products.count, advertisement_count: user.advertisements.count}
    prod
  end
end
