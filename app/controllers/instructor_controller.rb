class InstructorController < ApplicationController
  before_action :force_instructor

  def index
  	if @assessment.update(params[:assessment])
	  # success
	else
	  # error handling
	end
  end

  private
    def force_instructor
      if not @launch_params.instructor?
        redirect_to lti_error_path, alert: 'You do not have permission to access this part of the application.'
      end
    end
end
