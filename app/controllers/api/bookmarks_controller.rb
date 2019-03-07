class Api::BookmarksController < ApplicationController

    def create
        @bookmark = Bookmark.new(bookmark_params)
        if @bookmark.save
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

    def comment_params
        params.require(:bookmark).permit(:user_id, :story_id)
    end

end
