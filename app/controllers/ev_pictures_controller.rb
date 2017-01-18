class EvPicturesController < ApplicationController
  def new
  end
  
  def create
  # # @event = Event.find(params[:id])
  #   @ev_picture = @event.ev_pictures.build(ev_picture_params)
  #   if @ev_pictures.save
  #     redirect_to events_path
  #   else
  #     render 'events/index'
  #   end
  end
  
  def destroy
  end

  private
  def ev_picture_params
    params.require(:ev_picture).permit(:picture)
  end
end
