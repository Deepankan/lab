module ApplicationHelper
	  def get_date_format(date)
	    date.strftime("#{date.day.ordinalize}%b%y ")
	  end
end
