Rails.application.routes.draw do
  #resources :products
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
 # get 'product_details/index' => 'product_details#index', as: :company_root
 get 'product_details/edit_pricing/:id' => 'product_details#edit_pricing',as:  :get_pricing
 get 'product_details/delete_pricing/:id' => 'product_details#delete_pricing',as:  :delete_pricing
 patch 'product_details/update_pricing/:id' => 'product_details#update_pricing' , as: :update_pricing
 get 'product_details/upload_file' => 'product_details/upload_file'
 post 'product_details/import_file' => 'product_details/import_file'
 get 'product_details/sample_xls' => 'product_details#sample_xls', as: :sample_xls
 resources :product_details
 root to: redirect('/users/sign_in')
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
end
