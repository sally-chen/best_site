class SessionsController < ApplicationController
  def new
  end
  
  def create
    if validation_admin(params[:session][:name], params[:session][:password])
      # Log the user in and redirect to the user's show page.
      session[:user_id] = 1
      redirect_to events_path
    else
      flash.now[:danger] = 'Invalid name/password combination'
      render 'new'
    end
  end
  def destroy
    log_out if logged_in?
    redirect_to root_url
  end
end
