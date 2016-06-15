# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#--------------Creation of Role-----------------------------------------

Role.create(role_type: "admin")
Role.create(role_type: "company")
Role.create(role_type: "dealer")
Role.create(role_type: "customer")

#---------------End of Role--------------------------------------------------------

#-------------Creation of Admin User -----------------------------------


user =  User.new()
user.email = "admin@labkit.com"
user.password = "password"
user.user_name = "admin-demo"
user.mobile_no = "1234567890"
user.role_id = Role.find_by_role_type("admin").id
user.save

#---------------End of Admin User-----------------------------------------

#--------------Creation of User Profile for Admin----------------------

user_profile = UserProfile.new()
user_profile.name = "admin"
user_profile.user_id = user.id
user_profile.address = "Bangalore"
#--------------End of User Profile for Admin---------------------------


#----------Start of City-----------------------------------------------

City.create(city: "Bangalore")
City.create(city: "Lucknow")
#---------------End of City---------------------------------------------