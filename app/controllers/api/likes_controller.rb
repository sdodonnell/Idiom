class Api::LikesController < ApplicationController
   
    def create
        @like = Like.new(like_params)
        if @like.save
            render 'api/likes/show'
        else
            render json: @like.errors.full_messages, status: 401
        end
    end

    def destroy
        @like = Like.find(params[:id])
        @like.destroy
    end

    private

    def comment_params
        params.require(:like).permit(:user_id, :story_id)
    end

end
