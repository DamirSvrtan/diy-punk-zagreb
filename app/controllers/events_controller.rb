class EventsController < ApplicationController

	APP_ID = "507711889323733"
	APP_SECRET = "c92a6204df0660605ec52ca4cae9a2a5"
	APP_ACCESS_TOKEN = "CAAHNwuLPttUBAGHO0ezLLr21cgTZChtLFQcK738TvoiACxEObF614ZCZCKmpHPW8VrXWfdlviThJS541918IOwAxeS8ZAoZCBQZC4KGCtlDOl1JW3FvSvt5KFsxH9opOJWLZA0IndK74GXjL4RdI35K27CQMqMGBzUBDctUrprhWaJzVxxDA9FRvaiQtmNy6TwZD"
	
	before_filter {	@graph = Koala::Facebook::API.new(APP_ACCESS_TOKEN) }

	def index
	#	@oauth = Koala::Facebook::OAuth.new(APP_ID, APP_SECRET, "http://localhost:3000/")
	#	@access_token = @oauth.get_app_access_token
		@events = @graph.get_connections("334751420002389", "events")
		#event_ids = @events.map {|event| event["id"] }
		@events.each do |event|
			Event.create_event(event) if Event.where(fb_id: event["id"]).first.nil?
		end
	end

	def show
		@events = @graph.get_object(params[:id])
	end


end
