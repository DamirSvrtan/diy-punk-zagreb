class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :fb_id
      t.string :name
      t.string :start_time
      t.string :location

      t.timestamps
    end
  end
end
