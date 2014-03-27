      //window.myZoom = 20;
      function initialize() {
        
        var mapOptions = {
          center: new google.maps.LatLng(59.3482, 18.0723),
          zoom: 20,
          mapTypeId: google.maps.MapTypeId.TERRAIN 
        };

        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
        //document.getElementById("map-canvas")
      }

      function update(zoom){
      //mapOptions.zoom = zoom;
      map.setZoom(6);
      //google.maps
      //alert("Update!");
      }

      google.maps.event.addDomListener(window, 'load', initialize, update);


 

      google.maps.event.addDomListener($('#controlPanel'), 'click', function() {
      //map.setCenter(chicago)
      map.setZoom(6);  
      });


