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
  acts_as_paranoid      
  accepts_nested_attributes_for :user_profile

  def get_role
    self.role.role_type
  end

  def self.set_role
  
     Role.find_by_role_type(COMPANY)
  end
end
