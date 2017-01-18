class EvPicture < ActiveRecord::Base
  belongs_to :event
  mount_uploader :picture, PictureUploader
  validates :event_id, presence: true
  
  
  
end
