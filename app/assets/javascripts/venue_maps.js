 $(document).ready(function(){
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(45.802253,15.980216),
      zoom: 14,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("venue-map"),
        mapOptions);

  // VENUES

  medika = { "lattitude": 45.806352, "longitude": 15.964293, "name": "AKC Medika", "address": "Pierottijeva 11", "slug": "medika"}
  attack = { "lattitude": 45.806191, "longitude": 15.964491, "name": "AKC Attack", "address": "Pierottijeva 11", "slug": "attack"}
  greyRoom = { "lattitude": 45.806419, "longitude": 15.964539, "name": "Grey Room", "address": "Pierottijeva 11", "slug": "grey"}
  warehouse = { "lattitude": 45.797235, "longitude": 16.013215, "name": "Warehouse", "address": "Slavonska avenija 3", "slug":"warehouse"}
  klaonica = { "lattitude": 45.805567, "longitude": 16.003731, "name": "Klaonica", "address": "Heinzlova ulica 66", "slug":"klaonica"}
  mochvara = { "lattitude": 45.791097, "longitude": 15.976218, "name": "Mochvara", "address": "Trnjanski nasip BB", "slug":"mocvara"}
  jedinstvo = { "lattitude": 45.791295, "longitude": 15.976432, "name": "Jedinstvo", "address": "Trnjanski nasip BB", "slug":"jedinstvo"}
  spunk = { "lattitude": 45.796142, "longitude": 15.978659, "name": "Spunk", "address": "Hrvatske Bratske zajednice bb", "slug":"spunk"}

  venues = [medika, attack, greyRoom, warehouse, klaonica, mochvara, jedinstvo, spunk]


  // Markers for Venues
  venues.forEach(
    function(venue){
      venue["map"] = new google.maps.Marker({
          position: new google.maps.LatLng(venue["lattitude"],venue["longitude"]),
          map: map 
        });
      }
    );

// info Window for all the venues
  var TheInfoWindow = new google.maps.InfoWindow({
    content: null
  });

  venues.forEach(
    function(venue){
        google.maps.event.addListener(venue["map"], 'click', function() {
          TheInfoWindow.content = "<h3>"+ venue["name"] +"</h3><p>Adress:" + venue["address"] + "</p>"
          TheInfoWindow.open(map,venue["map"]);
        });
      }
    );

// Set links for venue navigations
  venues.forEach(
    function(venue){
      venue_column = $('th.venue').filter(function(){ return $(this).text().toLowerCase().indexOf(venue["slug"]) >= 0;})

      google.maps.event.addDomListener(venue_column[0], 'click', function() {
        map.setZoom(14);
        map.panTo(venue["map"].getPosition());
        
        TheInfoWindow.content = "<h3>"+ venue["name"] +"</h3><p>Adress:" + venue["address"] + "</p>"
        TheInfoWindow.open(map,venue["map"]);
        
        $('th.venue').removeClass('selected');
        $('th.venue').filter(function(){ return $(this).text().toLowerCase().indexOf(venue["slug"]) >= 0;}).addClass('selected');     
      });
    }
  );

  }
  google.maps.event.addDomListener(window, 'load', initialize);

});