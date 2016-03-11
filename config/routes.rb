Rails.application.routes.draw do
  root 'assessment#index'

  get '/assessment/specs/:id', to: 'assessment#specs', as: :assessment_specs, constraints: {id: /\d+/}

  get '/submission/upload', to: 'submissions#index', as: :upload_submission
  post '/submission/upload', to: 'submissions#create'

  get '/submission/result/:id', to: 'submissions#view', as: :submission_results, constraints: {id: /\d+/}
  get '/submission/download/:id', to: 'submissions#download', as: :download_submission, constraints: {id: /\d+/}

  get '/submission/grade/:id', to: 'submissions#grade', as: :grade_submission, constraints: {id: /\d+/}

  get '/driver/download/:id', to: 'test_driver#download', as: :download_driver, constraints: {id: /\d+/}

  post '/launch', to: 'launch#verify'
  get '/launch/error', to: 'launch#error', as: :launch_error
end
