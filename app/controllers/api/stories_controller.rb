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

    def update
        @story = Story.find(params[:id])
        if @story.update_attributes(story_params)
            render 'api/stories/show'
        else
            render json: @story.errors.full_messages, status: 401
        end
    end

    def destroy
        @story = Story.find(params[:id])
        @story.destroy
    end

    private

    def story_params
        params.require(:story).permit(:id, :title, :body, :tags, :user_id, :title_preview, :body_preview)
    end

end
