      //window.myZoom = 20;
      function initialize() {
        
        var chicago = new google.maps.LatLng(41.850033, -87.6500523);
        var kth = new google.maps.LatLng(59.3482, 18.0723);

        var mapOptions = {
          center: kth,
          zoom: 20,
          mapTypeId: google.maps.MapTypeId.TERRAIN,

          //Controls
            panControl: false,
            zoomControl: true,
               zoomControlOptions: {
                  style: google.maps.ZoomControlStyle.SMALL
               },
            mapTypeControl: true,
               mapTypeControlOptions: {
                  style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                  position: google.maps.ControlPosition.BOTTOM_CENTER
               },
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true,
            //disableDefaultUI: true
        };

        var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);


          // Create the DIV to hold the control and call the HomeControl() constructor
         // passing in this DIV.
          var homeControlDiv = $(document.createElement('div'));
          homeControlDiv.attr('id','homeControlDiv');
          var homeControl = new HomeControl(homeControlDiv, map);

          var rabarber = document.createElement('div');
          rabarber.innerHTML = "Hej";



          //homeControlDiv.index = 2;
          map.controls[google.maps.ControlPosition.TOP_RIGHT].push($( "#homeControlDiv" ).get( 0 ));

      }






     function HomeControl(controlDiv, map) {

          console.log(controlDiv.attr('id'));
         
          var controlUI = $(document.createElement('div'));
          
          var controlText = $(document.createElement('div'));
          controlText.html('<strong>Kontrollknapp</strong>');
          controlUI.append(controlText);
          controlUI.addClass("btn btn-default");
          controlUI.attr('id','controlUI');

          //$('#controlPanel').append(controlUI);
          controlDiv.append(controlUI);


       // Setup the click event listeners: simply set the map to Chicago.
      google.maps.event.addDomListener(controlUI, 'click', function() {
        map.setCenter(chicago)
        //map.setCenter(59.3482, 18.0723);
      });

  }




























      function update(zoom){
      //mapOptions.zoom = zoom;
      map.setZoom(6);
      //google.maps
      //alert("Update!");
      }

        //Raden nedan laddar kartan genom att köra initialize(). Dock har jag kommenterat bort den och testar samma sak i
        //HTML-koden genom att köra <body onload="initialize()">
      //google.maps.event.addDomListener(window, 'load', initialize, update);

    //Skapa lite divvar för custom Controls



