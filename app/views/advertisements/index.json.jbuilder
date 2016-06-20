json.array!(@advertisements) do |advertisement|
  json.extract! advertisement, :id, :title, :description, :web_url, :start_date, :end_date, :images
  json.url advertisement_url(advertisement, format: :json)
end
