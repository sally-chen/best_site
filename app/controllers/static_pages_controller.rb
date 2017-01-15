class StaticPagesController < ApplicationController
  def home
    @current_page = root_path
  end

  def about
    @current_page = about_path
    
  end

  def events
    @current_page = events_path
  end

  def exec
     @current_page = exec_path
  end

  def contact
     @current_page = contact_path
  end

  
end
