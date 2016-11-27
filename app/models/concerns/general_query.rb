module GeneralQuery

def get_date_format(date)
    date.strftime("#{date.day.ordinalize} %b %y") if date
end

def get_status(value)
  STATUS_ORDER.invert[value]
 end


end


