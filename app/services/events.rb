class Events

  def self.all
      graph = AccessTokenHandler.get_graph_object
      events = graph.get_connections("334751420002389", "events", {fields: "start_time,name,location,id,description"})
      events.select! {|event| event["start_time"] > Date.yesterday.to_s}
      events.reverse!
  end

end