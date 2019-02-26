class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:username], params[:password])
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages
        end
    end

    def destroy
        logout
        render '/'
    end

end
