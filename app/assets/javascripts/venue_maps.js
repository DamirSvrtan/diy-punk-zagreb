 $(document).ready(function(){
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(45.802253,15.978216),
      zoom: 14,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("venue-map"),
        mapOptions);



// VENUES

attack = { "lattitude": 45.806191, "longitude": 15.964491, "name": "AKC Attack", "address": "Pierottijeva 11"}
greyRoom = { "lattitude": 45.806419, "longitude": 15.964539, "name": "Grey Room", "address": "Pierottijeva 11"}
medika = { "lattitude": 45.806352, "longitude": 15.964293, "name": "AKC Medika", "address": "Pierottijeva 11"}
warehouse = { "lattitude": 45.797235, "longitude": 16.013215, "name": "Warehouse", "address": "Slavonska avenija 3"}
klaonica = { "lattitude": 45.805567, "longitude": 16.003731, "name": "Klaonica", "address": "Heinzlova ulica 66"}
mochvara = { "lattitude": 45.791097, "longitude": 15.976218, "name": "Mochvara", "address": "Trnjanski nasip BB"}
jedinstvo = { "lattitude": 45.791295, "longitude": 15.976432, "name": "Jedinstvo", "address": "Trnjanski nasip BB"}
spunk = { "lattitude": 45.796142, "longitude": 15.978659, "name": "Spunk", "address": "Hrvatske Bratske zajednice bb"}

venues = [attack, greyRoom, medika, warehouse, klaonica, mochvara, jedinstvo, spunk]

venues.forEach(
  function(venue){
    venue["map"] = new google.maps.Marker({
        position: new google.maps.LatLng(venue["lattitude"],venue["longitude"]),
        map: map 
      });
    }
  );

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


    //   google.maps.event.addDomListener($('th:contains("Klaonica")')[0], 'click', function() {
    //     map.setZoom(16);
    //     map.setCenter(klaonica.getPosition());
    //   });


    //   google.maps.event.addDomListener($('th:contains("Medika")')[0], 'click', function() {
    //     map.setZoom(16);
    //     map.setCenter(medika.getPosition());
    //   });

    //   google.maps.event.addDomListener(spunk, 'click', function() {
    //     $('th:contains("Spunk")').addClass("hovered");
    //   });

  }
  google.maps.event.addDomListener(window, 'load', initialize);

});