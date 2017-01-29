class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

 include GeneralQuery

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
  scope :get_dealer, -> {where(role_id: Role.find_by_role_type(DEALER))}

  has_many :orders

  validates :user_name, presence: {message: "User Name can't be blank"}
  validates :mobile_no, presence: { message: "Mobile Number can't be blank" }, length: { maximum: 10, message: "Mobile Number can't be greater than 10 " }, uniqueness: {message: "Mobile Number is already registered."} 
  validates :role_id, presence: {message: "Role is not assigned"}

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


  def self.get_dealer_info
    dealer = User.get_dealer().includes(:user_profile).map{|h| {id: h.id, name: h.user_profile.name, email: h.email, mobile_no: h.mobile_no, city: h.user_profile.city.city}}      
  end


 def create_user_order(params)

      self.orders.create(params.require(:order).permit!)
 end


 def dealer_orders
  Order.where(dealer_id: self.id)
 end


 def get_list_order(params)
  
  case self.role.role_type
  when CUSTOMER
    order = self.orders
    flag = true
  when DEALER
    order = self.dealer_orders.where.not(status: STATUS_ORDER["Reject"])
    flag = false
  end

  order = params["modified_at"].present? ? order.where('updated_at >= ?', DateTime.parse(params["modified_at"])) : order
  
  order.map{|h| {order_id: h.id, order_no: h.order_no, total_amount: h.total_amount, status: h.status, user_name: (flag ? h.dealer.user_profile.name : h.user.user_profile.name), order_product_detail: get_order_product_detail(h.order_product_details, h.id), order_at: get_date_format(h.created_at) }}
 end
  
 def get_status(value)
  STATUS_ORDER.invert[value]
 end 
 
 def get_order_product_detail(product_detail, order_id)
  product_detail.map{|k| {product_detail_id: k.id, product_name: k.product.product_name, quantity: k.quantity,\
                          price: k.price, sub_total: k.sub_total, pakaging: k.product.pakaging, grade: k.product.grade,\
                          formula: k.product.formula, molar_mass: k.product.molar_mass, order_id: order_id} if k.product}
 end


 def send_notification(order)
   case self.role.role_type
   when CUSTOMER
    message = "You got new order from #{self.user_name}, for amount #{order.total_amount}"
    usr = order.dealer 
   when DEALER

    usr = order.user 
    message = "Your order from dealer #{self.user_name}, has been #{STATUS_ORDER.invert[order.status]}ed."
   end
   
   User.push_notification(usr, message)
   

     
 end

 def self.push_notification(usr, message)
  registration_ids = usr.devise_infos.last(3).map{|h| h.fcm_key}
   options = {data: {body: message}, collapse_key: "updated_score"}
   fcm = FCM.new(FCM_NOTIFICATION) 
   
   response = fcm.send(registration_ids, options)   
 end

 def self.get_customer_dealer(message)

  user = Role.where(role_type: [CUSTOMER, DEALER]).map{|h| h.users.map{|k| User.push_notification(k, message)}}
 end
   
end
