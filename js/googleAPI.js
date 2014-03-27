      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(59.3482, 18.0723),
          zoom: 5,
          mapTypeId: google.maps.MapTypeId.TERRAIN 
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);