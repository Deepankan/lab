Rails.application.routes.draw do
  
  resources :cities
  devise_for :users, :controllers => {:registrations => "registrations"}
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products
 get 'admins/index' => 'admins#index', as: :admin_root
 get 'dashboards/list_company' => 'dashboards#list_company' , as: :list_company
 get 'dashboards/change_status_company' => 'dashboards#change_status_company' , as: :change_status_company
 get 'advertisements/change_status/:id' => 'advertisements#change_status' , as: :change_status
 # get 'product_details/index' => 'product_details#index', as: :company_root
 get 'product_details/edit_pricing/:id' => 'product_details#edit_pricing',as:  :get_pricing
 get 'product_details/delete_pricing/:id' => 'product_details#delete_pricing',as:  :delete_pricing
 patch 'product_details/update_pricing/:id' => 'product_details#update_pricing' , as: :update_pricing
 get 'product_details/upload_file' => 'product_details/upload_file'
 post 'product_details/import_file' => 'product_details/import_file'
 #get 'product_details/sample_xls' => 'product_details#sample_xls', as: :sample_xls
 post 'advertisements/new_advertisement' => 'advertisements#new_advertisement', as: :new_adv
 get 'advertisements/get_advertisement' => 'advertisements#get_advertisement', as: :get_adv
 put 'advertisements/update_advertisement/:id' => 'advertisements#update_advertisement', as: :update_adv
 get 'products/search' => 'products#search'
 get 'products/all_product' => 'products#all_product' , as: :all_product
 post 'products/new_upload_product' => 'products#new_upload_product', as: :new_upload_product
 get 'products/sample_xls' => 'products#sample_xls', as: :sample_xls


resources :product_details

 authenticated :user do
  root :to => 'dashboards#index', as: :authenticated_root
end
 root to: redirect('/users/sign_in'), as: :sign_out
 resources :advertisements
  resources :products
  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     #   end


   #-------------Routes for Inmegh API Version 1 -------------------------------------------------------

  
  namespace :api, defaults: {format: 'json'} do
         get '/get_city_role' => 'registrations#get_city_role'
         post '/sign_in' => 'registrations#sign_in'
         get '/sign_out' => 'registrations#sign_out'
         post '/sign_up' => 'registrations#sign_up'
         post '/forgot_password' => 'registrations#forgot_password'
         post '/reset_password' => 'registrations#reset_password'
         post '/advertisements' => 'visitors#advertisements'
         post '/products' => 'visitors#products'
         post '/new_advertisement' => 'advertisements#new_advertisement'
         post '/edit_advertisement' => 'advertisements#edit_advertisement'
         post '/update_advertisement' => 'advertisements#update_advertisement'
         delete '/delete_advertisement' => 'advertisements#delete_advertisement'
         get '/get_dealer' => 'visitors#get_dealer' 
  end

  #------------------------------------------------------------------------------------
end
