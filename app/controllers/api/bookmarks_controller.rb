class Api::BookmarksController < ApplicationController

    def index
        @bookmarks = Bookmark.where(follower_id: params[:user_id])
    end

    def create
        @bookmark = Bookmark.new(bookmark_params)
        if @bookmark.save
            @story = Story.find(@bookmark.story_id)
            render 'api/bookmarks/show'
        else
            render json: @bookmark.errors.full_messages, status: 401
        end
    end

    def destroy
        @bookmark = bookmark.find(params[:id])
        @bookmark.destroy
    end

    private

    def bookmark_params
        params.require(:bookmark).permit(:user_id, :story_id)
    end

end
