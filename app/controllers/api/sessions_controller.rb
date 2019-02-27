class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ['Could not find user with that username and password.'], status: 401
        end
    end

    def destroy
        logout
    end

end
