class EventsController < ApplicationController

	APP_ACCESS_TOKEN = "CAAHNwuLPttUBAKR2kNZCMfIISZCpd0ajwU0vvI3HOdkkYPcrBikrB3Oa2SnWluasLiegJ9FQZBtmfTzoeUmyu7RDWHGP7XuX2t0Rfw1ZBYDprsOIANDXvXOWxK2qFgdPYXr8q5S8yAhpERBCR49tqvZBfZAtDkmjR919FbL95KXURQZBWd1A96K"
	
	before_filter {	@graph = Koala::Facebook::API.new(APP_ACCESS_TOKEN) }

	def index
		@events =[] 
		# @graph.get_connections("334751420002389", "events", {fields: "start_time,name,location,id,description"})
		# @events.select! {|event| event["start_time"] > Date.yesterday.to_s}

		@next_show = @events.first
	end

	def show
		@events = @graph.get_object(params[:id])
	end


end