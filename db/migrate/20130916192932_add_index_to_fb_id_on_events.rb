class AddIndexToFbIdOnEvents < ActiveRecord::Migration
  def change
		add_index :events, :fb_id
  end
end
