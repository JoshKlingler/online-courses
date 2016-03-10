Rails.application.routes.draw do
  root 'welcome#index'

  get '/manage', to: 'assessment#index', as: :manage
  post '/manage', to: 'assessment#create'
  patch '/manage', to: 'assessment#update'

  post '/launch', to: 'launch#verify'
  get '/launch/error', to: 'launch#error', as: :launch_error
end
