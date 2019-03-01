class ChangeTopicColumnToData < ActiveRecord::Migration[5.2]
  def change
    rename_column :stories, :topic, :tags
  end
end
