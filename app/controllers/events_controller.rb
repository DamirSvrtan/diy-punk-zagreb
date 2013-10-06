class EventsController < ApplicationController

	access_token = ENV["FB_APP_ACCESS_TOKEN"]
	
	before_filter {	@graph = Koala::Facebook::API.new(access_token)}

	def index
		@events = @graph.get_connections("334751420002389", "events", {fields: "start_time,name,location,id,description"})
		@events.select! {|event| event["start_time"] > Date.yesterday.to_s}
		@events.reverse!
		@next_show = @events.first
	end


 # GET LONG LIVED ACCESS TOKEN
 # https://graph.facebook.com/oauth/access_token?             
 #    client_id=APP_ID&
 #    client_secret=APP_SECRET&
 #    grant_type=fb_exchange_token&
 #    fb_exchange_token=EXISTING_ACCESS_TOKEN 

end