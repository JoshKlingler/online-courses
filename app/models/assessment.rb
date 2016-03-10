class Assessment < ActiveRecord::Base
  has_many :submissions
  has_many :test_drivers

  belongs_to :instructor, class_name: 'User'

  mount_uploader :attachment, AssessmentUploader

  validates :name, presence: true
  validates :instructor, presence: true
  validates :attachment, presence: true
end
