class EventsController < ApplicationController
	def index
		@events = Events.all
		@next_show = @events.first
	end

	# GET LONG LIVED ACCESS TOKEN
	# https://graph.facebook.com/oauth/access_token?
	#    client_id=APP_ID&
	#    client_secret=APP_SECRET&
	#    grant_type=fb_exchange_token&
	#    fb_exchange_token=EXISTING_ACCESS_TOKEN
end