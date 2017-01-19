class CreateEvPictures < ActiveRecord::Migration
  def change
    create_table :ev_pictures do |t|
      t.string :picture
      t.references :event, index: true

      t.timestamps null: false
    end
    add_foreign_key :ev_pictures, :events
    add_index :ev_pictures, [:event_id, :created_at]
  end
end
