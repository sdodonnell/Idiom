class AddPreviewColumnsToStories < ActiveRecord::Migration[5.2]
  def change
    add_column :stories, :title_preview, :string
    add_column :stories, :body_preview, :text
  end
end
