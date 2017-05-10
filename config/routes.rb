Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    # resources :todos, only: [:show, :index, :create, :update, :destroy ]
    resources :steps, only: [:show, :create, :update, :destroy]

    resources :todos, only: [:index, :create, :show, :update, :destroy] do
      resources :steps, only: [:index]
    end

  end

  root to: "static_pages#root"
end
