class AssessmentController < ApplicationController
  before_action :force_instructor
  before_action :load_assessment

  def index
    
  end

  def create
    @assessment.instructor = @launch_params.user
    @assessment.save!
    redirect_to manage_path
  end

  def update
    @assessment.update! assessment_params
    redirect_to manage_path
  end

  private
    def load_assessment
      @assessment         = Assessment.find_by(context: @launch_params.context_id) || Assessment.new(assessment_params)
      @assessment.context = @launch_params.context_id if @assessment.context.nil?
    end

    def force_instructor
      if not @launch_params.instructor?
        redirect_to launch_error_path, alert: t('errors.launch.not_permitted')
      end
    end

    def assessment_params
      params.permit(assessment: [:name, :submit_limit, :attachment])[:assessment]
    end 
end
