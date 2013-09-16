class Event < ActiveRecord::Base
  attr_accessible :fb_id, :location, :name, :start_time

	validates_uniqueness_of :fb_id

	def self.create_event(event)
		Event.create!(fb_id: event["id"], name: event["name"], start_time: event["start_time"], location: event["location"])
	end

end
