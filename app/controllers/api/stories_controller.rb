class Api::StoriesController < ApplicationController

    def index
        @stories = Story.where(user_id: params[:story][:user_id])
        render 'api/stories/index'
    end

    def show
        @story = Story.find(params[:id])
        render 'api/stories/show'
    end

    def create
        @story = Story.new(story_params);
        if @story.save
            render 'api/stories/show'
        else
            render json: @story.errors.full_messages, status: 401
        end
    end

    def edit
        @story = Story.find(params[:id])
    end

    def delete
        @story = Story.find(params[:id])
        @story.destroy!
    end

    private

    def story_params
        params.require(:story).permit(:title, :body, :tags, :user_id, :title_preview, :body_preview)
    end

end
