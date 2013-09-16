class EventsController < ApplicationController

	APP_ID = "507711889323733"
	APP_SECRET = "c92a6204df0660605ec52ca4cae9a2a5"
	APP_ACCESS_TOKEN = "CAAHNwuLPttUBAEP9LgWxIFvnD2W7IpKrVtQnZAa0OwP15vsMqA5aIvkP7qKeP0VhARqiAqiVBRMP6uJ9lUPalc5AhazD7xx0JmyCxcMg2VU8wZAzjepqD5PVgIZBQig7NRZBcgYkq5KmHXXNNm6pZClA0iiZCZAbsvRFQvou9ITyfONmAD7WZCakAzWw9yWeFNgZD"
	
	before_filter {	@graph = Koala::Facebook::API.new(APP_ACCESS_TOKEN) }

	def index
	#	@oauth = Koala::Facebook::OAuth.new(APP_ID, APP_SECRET, "http://localhost:3000/")
	#	@access_token = @oauth.get_app_access_token
		@events = @graph.get_connections("334751420002389", "events")
	end

	def show
		@events = @graph.get_object(params[:id])
	end


end
