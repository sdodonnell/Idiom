class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.where(story_id: params[:story_id])
        render 'api/comments/index'
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render 'api/comments/show'
        else
            render json: @comment.errors.full_messages, status: 401
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :user_id, :story_id)
    end

end
