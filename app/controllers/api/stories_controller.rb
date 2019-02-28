class Api::StoriesController < ApplicationController

    def show
        @story = Story.find(params[:id])
    end

    def index
        @stories = Story.all
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
        params.require(:story).permit(:title, :body, :topic, :user_id)
    end

end
