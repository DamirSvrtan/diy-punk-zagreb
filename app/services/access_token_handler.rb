class AccessTokenHandler
  @@access_token = ENV["FB_APP_ACCESS_TOKEN"]

  def self.access_token
    @@access_token
  end

  def self.get_graph_object
    Koala::Facebook::API.new(@@access_token)
  end
end