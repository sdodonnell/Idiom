class AddColumnToUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :fullname, :string, null: false
  end
end
