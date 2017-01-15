class Event < ActiveRecord::Base
  mount_uploader :picture, PictureUploader
end
