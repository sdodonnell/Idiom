class ApplicationController < ActionController::Base

    helper_method :current_user

    def login!(user)
        @current_user = user
        session[:session_token] = @current_user.reset_session_token!
    end

    def logout
        session[:session_token] = nil
        @current_user = nil
    end

    def logged_in?
        !!current_user
    end
end
