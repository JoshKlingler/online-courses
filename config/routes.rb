Rails.application.routes.draw do
  root 'welcome#index'

  get '/manage', to: 'assessment#index', as: :manage
  post '/manage', to: 'assessment#create'

  post '/launch', to: 'launch#verify'
  get '/launch/error', to: 'launch#error', as: :launch_error
end
