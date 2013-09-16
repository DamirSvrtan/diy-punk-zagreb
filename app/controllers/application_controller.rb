class ApplicationController < ActionController::Base
  protect_from_forgery

	APP_ID = "507711889323733"
	APP_SECRET = "c92a6204df0660605ec52ca4cae9a2a5"
	APP_ACCESS_TOKEN = "CAAHNwuLPttUBAL0bSyOZCLqoWCIr4vmnJWK6GyRYwDQa8gwbhr5CLJRHYIXV4TihIRNJJKYlR3e3uB4fzJKKKIhn8BxkZBYbHCrbNfCo5bnyI55HUnfaQ9g4bruRlzEiUHvj1FW3Jg5efFry21DCKitKfKr9FuoVAvZAyeJRwHCAptWbLB4LpOssEKNsPJThI6rVluiQAZDZD"


	def front_page
	#	@oauth = Koala::Facebook::OAuth.new(APP_ID, APP_SECRET, "http://localhost:3000/")
	#	@access_token = @oauth.get_app_access_token
		@graph = Koala::Facebook::API.new(APP_ACCESS_TOKEN)
		@events = @graph.get_connections("334751420002389", "events")
	end


end
