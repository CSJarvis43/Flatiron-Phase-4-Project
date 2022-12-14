Rails.application.routes.draw do
  resources :moves
  resources :pokemons
  resources :users, only: [:index, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '/me', to: 'users#show'
  get '/signup', to: 'users#create'

  get '/pokemons/:id/moves', to: 'pokemons#moves'
  post '/pokemons/:id/moves', to: 'pokemons#new_move'


  #leave as last line
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
