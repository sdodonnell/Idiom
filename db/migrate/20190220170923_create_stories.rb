class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.string :topic
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
