
 
var map;
var KTH = new google.maps.LatLng(59.34823, 18.0723);

/**
 * The HomeControl adds a control to the map that
 * returns the user to the control's defined home.
 */

// Define a property to hold the Home state
HomeControl.prototype.home_ = null;

// Define setters and getters for this property
HomeControl.prototype.getHome = function() {
  return this.home_;
}

HomeControl.prototype.setHome = function(home) {
  this.home_ = home;
}

/** @constructor */
function HomeControl(controlDiv, map, home) {

  // We set up a variable for this since we're adding
  // event listeners later.
  var control = this;

  // Set the home property upon construction
  control.home_ = home;

  // Set CSS styles for the DIV containing the control
  // Setting padding to 5 px will offset the control
  // from the edge of the map
  controlDiv.style.padding = '5px';

  // Set CSS for the Zoom In
  var zoomIn = document.createElement('div');
  zoomIn.setAttribute("id", "zoomIn");
  zoomIn.title = 'Click to zoom in';
  controlDiv.appendChild(zoomIn);

  var zoomInText = document.createElement('div');
  zoomInText.setAttribute("id", "zoomInText");
  zoomInText.innerHTML = '<b>Zoom in</b>';
  zoomIn.appendChild(zoomInText);

  // Set CSS for the Zoom Out
  var zoomOut = document.createElement('div');
  zoomOut.setAttribute("id", "zoomOut");
  zoomOut.title = 'Click to zoom out';
  controlDiv.appendChild(zoomOut);

  var zoomOutText = document.createElement('div');
  zoomOutText.setAttribute("id", "zoomOutText");
  zoomOutText.innerHTML = '<b>Zoom out</b>';
  zoomOut.appendChild(zoomOutText);

    // Set CSS for pan left
  var panLeft = document.createElement('div');
  panLeft.setAttribute("id", "panLeft");
  panLeft.title = 'Click to pan left';
  controlDiv.appendChild(panLeft);

  var panLeftText = document.createElement('div');
  panLeftText.setAttribute("id", "panLeftText");
  panLeftText.innerHTML = '<b>Pan Left</b>';
  panLeft.appendChild(panLeftText);

      // Set CSS for pan right
  var panRight = document.createElement('div');
  panRight.setAttribute("id", "panRight");
  panRight.title = 'Click to pan right';
  controlDiv.appendChild(panRight);

  var panRightText = document.createElement('div');
  panRightText.setAttribute("id", "panRightText");
  panRightText.innerHTML = '<b>Pan Right</b>';
  panRight.appendChild(panRightText);

      // Set CSS for pan up
  var panUp = document.createElement('div');
  panUp.setAttribute("id", "panUp");
  panUp.title = 'Click to pan up';
  controlDiv.appendChild(panUp);

  var panUpText = document.createElement('div');
  panUpText.setAttribute("id", "panUpText");
  panUpText.innerHTML = '<b>Pan Up</b>';
  panUp.appendChild(panUpText);

      // Set CSS for pan down
  var panDown = document.createElement('div');
  panDown.setAttribute("id", "panDown");
  panDown.title = 'Click to pan down';
  controlDiv.appendChild(panDown);

  var panDownText = document.createElement('div');
  panDownText.setAttribute("id", "panDownText");
  panDownText.innerHTML = '<b>Pan Down</b>';
  panDown.appendChild(panDownText);

      //Hybrid view
  var typeHybrid = document.createElement('div');
  typeHybrid.setAttribute("id", "typeHybrid");
  typeHybrid.title = 'Click to change view to hybrid';
  controlDiv.appendChild(typeHybrid);

  var typeHybridText = document.createElement('div');
  typeHybridText.setAttribute("id", "typeHybridText");
  typeHybridText.innerHTML = '<b>Hybrid</b>';
  typeHybrid.appendChild(typeHybridText);

       //Terrain view
  var typeTerrain = document.createElement('div');
  typeTerrain.setAttribute("id", "typeTerrain");
  typeTerrain.title = 'Click to change view to terrain';
  controlDiv.appendChild(typeTerrain);

  var typeTerrainText = document.createElement('div');
  typeTerrainText.setAttribute("id", "typeTerrainText");
  typeTerrainText.innerHTML = '<b>Terrain</b>';
  typeTerrain.appendChild(typeTerrainText);

  //Satellite view
    var typeSatellite = document.createElement('div');
  typeSatellite.setAttribute("id", "typeSatellite");
  typeSatellite.title = 'Click to change view to satellite';
  controlDiv.appendChild(typeSatellite);

  var typeSatelliteText = document.createElement('div');
  typeSatelliteText.setAttribute("id", "typeSatelliteText");
  typeSatelliteText.innerHTML = '<b>Satellite</b>';
  typeSatellite.appendChild(typeSatelliteText);

  //Roadmap view
    var typeRoadmap = document.createElement('div');
  typeRoadmap.setAttribute("id", "typeRoadmap");
  typeRoadmap.title = 'Click to change view to terrain';
  controlDiv.appendChild(typeRoadmap);

  var typeRoadmapText = document.createElement('div');
  typeRoadmapText.setAttribute("id", "typeRoadmapText");
  typeRoadmapText.innerHTML = '<b>Roadmap</b>';
  typeRoadmap.appendChild(typeRoadmapText);

    //Roadmap view
    var typeTilt = document.createElement('div');
  typeTilt.setAttribute("id", "typeTilt");
  typeTilt.title = 'Click to change view to check out tilt view';
  controlDiv.appendChild(typeTilt);

  var typeTiltText = document.createElement('div');
  typeTiltText.setAttribute("id", "typeTiltText");
  typeTiltText.innerHTML = '<b>Tilt</b>';
  typeTilt.appendChild(typeTiltText);


  // Setup the click event listener for Home:
  // simply set the map to the control's current home property.
  google.maps.event.addDomListener(zoomIn, 'click', function() {
    var currentZoom = map.getZoom();
    map.setZoom(currentZoom+1);
  });

  // Setup the click event listener for Set Home:
  // Set the control's home to the current Map center.
  google.maps.event.addDomListener(zoomOut, 'click', function() {
   var currentZoom = map.getZoom();
    map.setZoom(currentZoom-1);
  });

    google.maps.event.addDomListener(panLeft, 'click', function() {
     var latVar = map.getCenter().lat() ;
     var longVar = map.getCenter().lng() + 0.01;
     map.setCenter(new google.maps.LatLng(latVar, longVar));     
    //control.setHome(newHome);
 
  });

    google.maps.event.addDomListener(panRight, 'click', function() {
    var latVar = map.getCenter().lat() ;
    var longVar = map.getCenter().lng() - 0.01;
    map.setCenter(new google.maps.LatLng(latVar, longVar));
  });

    google.maps.event.addDomListener(panUp, 'click', function() {
    var latVar = map.getCenter().lat() +0.002;
    var longVar = map.getCenter().lng();
    map.setCenter(new google.maps.LatLng(latVar, longVar));
    });

    google.maps.event.addDomListener(panDown, 'click', function() {
    var latVar = map.getCenter().lat() -0.002;
    var longVar = map.getCenter().lng();
    map.setCenter(new google.maps.LatLng(latVar, longVar));
    });

    google.maps.event.addDomListener(typeHybrid, 'click', function() {
      map.setOptions({
        mapTypeId: google.maps.MapTypeId.HYBRID
      });
    });

    google.maps.event.addDomListener(typeSatellite, 'click', function() {
      map.setOptions({
        mapTypeId: google.maps.MapTypeId.SATELLITE

      });
      map.setTilt(45);
    });

    google.maps.event.addDomListener(typeRoadmap, 'click', function() {
      map.setOptions({
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    });

    google.maps.event.addDomListener(typeTerrain, 'click', function() {
      map.setOptions({
        mapTypeId: google.maps.MapTypeId.TERRAIN
      });
    });


       google.maps.event.addDomListener(typeTilt, 'click', function() {
          map.setMapTypeId(google.maps.MapTypeId.SATELLITE),
      map.setCenter(new google.maps.LatLng(59.3243, 18.0633));
      map.setZoom(18);
      map.setTilt(45);
    });



}

function initialize() {
  var mapDiv = document.getElementById('map-canvas');
  var mapOptions = {
    zoom: 14,
    center: KTH
  }
  map = new google.maps.Map(mapDiv, mapOptions);

  var marker = new google.maps.Marker({
    position: KTH,
    map: map,
    draggable: true,
    
  })
  marker.setAnimation(google.maps.Animation.BOUNCE);

    var marker2 = new google.maps.Marker({
    position:  new google.maps.LatLng(59.34823, 18.0823),
    map: map,
  })

//hide url
    window.addEventListener("load",function() {
  // Set a timeout...
  setTimeout(function(){
    // Hide the address bar!
    window.scrollTo(0, 1);
  }, 0);
});
 

  // Create the DIV to hold the control and
  // call the HomeControl() constructor passing
  // in this DIV.
  var homeControlDiv = document.createElement('div');
  var homeControl = new HomeControl(homeControlDiv, map, KTH);

  homeControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);
}

google.maps.event.addDomListener(window, 'load', initialize);





      //     mapTypeId: google.maps.MapTypeId.HYBRID





