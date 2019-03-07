class Api::UserFollowsController < ApplicationController

    def create
        @user_follow = UserFollow.new(user_follow_params)
        if @user_follow.save
            render 'api/user_follows/show'
        else
            render json: @user_follow.errors.full_messages, status: 401
        end
    end

    def destroy
        @user_follow = user_follow.find(params[:id])
        @user_follow.destroy
    end

    private

    def user_follow_params
        params.require(:user_follow).permit(:follower_id, :followed_id)
    end

end
