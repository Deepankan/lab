task :add_city => :environment do 
p "Task Started"
states = CS.states(:in)
states.each do |k, v|
 city_name = CS.cities(k,:IN)
 city_name.each do |h|
  City.find_or_create_by(city: h)
 end
end
p "Task Ended"
end