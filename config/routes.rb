Rails.application.routes.draw do

  resources :invoices
  root 'invoices#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
