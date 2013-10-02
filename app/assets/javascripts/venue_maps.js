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

attack = {};
    greyRoom = new google.maps.Marker({
        position: new google.maps.LatLng(45.806419,15.964539),
        map: map
      });

    attack["map"] = new google.maps.Marker({
        position: new google.maps.LatLng(45.806191,15.964491),
        map: map
      });

    medika = new google.maps.Marker({
        position: new google.maps.LatLng(45.806352,15.964293),
        map: map
      });

    warehouse = new google.maps.Marker({
        position: new google.maps.LatLng(45.797235,16.013215),
        map: map
      });

    klaonica = new google.maps.Marker({
        position: new google.maps.LatLng(45.805567,16.003731),
        map: map
      });

    mochvara = new google.maps.Marker({
        position: new google.maps.LatLng(45.791097,15.976218),
        map: map
      });

      jedinstvo = new google.maps.Marker({
        position: new google.maps.LatLng(45.791295,15.976432),
        map: map
      });

    spunk = new google.maps.Marker({
        position: new google.maps.LatLng(45.796142,15.978659),
        map: map
      });

      google.maps.event.addDomListener($('th:contains("Klaonica")')[0], 'click', function() {
        map.setZoom(16);
        map.setCenter(klaonica.getPosition());
      });


      google.maps.event.addDomListener($('th:contains("Medika")')[0], 'click', function() {
        map.setZoom(16);
        map.setCenter(medika.getPosition());
      });

      google.maps.event.addDomListener(spunk, 'click', function() {
        $('th:contains("Spunk")').addClass("hovered");
      });





      //info Window for Grey Room

      greyRoomInfo = "<h3> Grey Room </h3><p>Adress: Pierottijeva 11</p>"
      attackInfo = "<h3> AKC Attack </h3><p>Adress: Pierottijeva 11</p>"
      mochvaraInfo = "<h3> Mochvara </h3> <p> Adress: Trnjanski nasip BB </p>"
      supicaInfo = "<h3> Supica @ Warehouse </h3> <p> Adress: Slavonska avenija 3</p>"

      var TheInfoWindow = new google.maps.InfoWindow({
        content: null
      });

      google.maps.event.addListener(greyRoom, 'click', function() {
        TheInfoWindow.content = greyRoomInfo;
        TheInfoWindow.open(map,greyRoom);
      });

      google.maps.event.addListener(attack["map"], 'click', function() {
        TheInfoWindow.content = attackInfo;
        TheInfoWindow.open(map,attack["map"]);
      });

      google.maps.event.addListener(mochvara, 'click', function() {
        TheInfoWindow.content = mochvaraInfo;
        TheInfoWindow.open(map,mochvara);
      });

  }
  google.maps.event.addDomListener(window, 'load', initialize);

});