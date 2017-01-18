class Event < ActiveRecord::Base
  mount_uploader :picture, PictureUploader
  has_many :ev_pictures, dependent: :destroy
  
  accepts_nested_attributes_for :ev_pictures, 
          reject_if: proc { |attributes| attributes['picture'].blank? }, allow_destroy: true
end
