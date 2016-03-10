class AddAttachmentToAssessments < ActiveRecord::Migration
  def change
    add_column :assessments, :attachment, :string
  end
end
