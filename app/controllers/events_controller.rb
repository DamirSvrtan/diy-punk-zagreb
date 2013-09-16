class EventsController < ApplicationController

	APP_ID = "507711889323733"
	APP_SECRET = "c92a6204df0660605ec52ca4cae9a2a5"
	APP_ACCESS_TOKEN = "CAAHNwuLPttUBAKR2kNZCMfIISZCpd0ajwU0vvI3HOdkkYPcrBikrB3Oa2SnWluasLiegJ9FQZBtmfTzoeUmyu7RDWHGP7XuX2t0Rfw1ZBYDprsOIANDXvXOWxK2qFgdPYXr8q5S8yAhpERBCR49tqvZBfZAtDkmjR919FbL95KXURQZBWd1A96K"
	
	before_filter {	@graph = Koala::Facebook::API.new(APP_ACCESS_TOKEN) }

	def index
		#	@oauth = Koala::Facebook::OAuth.new(APP_ID, APP_SECRET, "http://localhost:3000/")
		#	@access_token = @oauth.get_app_access_token
		@events = @graph.get_connections("334751420002389", "events")
		#@events.each do |event|
		#	Event.create_event(event) if Event.where(fb_id: event["id"]).first.nil?
		#end
	end

	def show
		@events = @graph.get_object(params[:id])
	end


end
