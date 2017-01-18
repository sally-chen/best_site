class EventsController < ApplicationController
   before_action :logged_in_admin, only: [:new, :create, :edit, :update, :destroy]
  def index
     @events = Event.all
  end
  
  def new
    @submit_marker = "Add Event"
    @event = Event.new
  end
  
  def create
    @event = Event.new(event_params)
    if @event.save
      redirect_to events_path, :notice => "your post has been saved"
    else
      render 'new'
    end
  
  end

  def show
    
   @event = Event.find(params[:id])
   @ev_picture = @event.ev_pictures.build 
  end

  def edit
    @submit_marker = "Update Event"
    @event = Event.find(params[:id])
    @event.ev_pictures.build
    
  end
  
  def update
    @event = Event.find(params[:id])
    if @event.update_attributes(event_params)
      redirect_to events_path
    else 
      render 'edit'
    end
  end
  
  def destroy
    Event.find(params[:id]).destroy
    redirect_to events_path
  end
  
  private
  
  def event_params
    params.require(:event).permit(:event_title, :event_content, :event_date, :picture, ev_pictures_attributes: [ :id, :picture, :_destroy])
  end
  
  def logged_in_admin
    unless logged_in?
      redirect_to login_url
    end
  end
end
