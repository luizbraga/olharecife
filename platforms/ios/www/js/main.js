$(document).ready(function(){


    $('#icon').click(function () {
        $('.search').toggleClass('expanded');
    });

});


function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
          center: new google.maps.LatLng(-8.053334, -34.881429),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    
    var map = new google.maps.Map(mapCanvas,mapOptions);
    
    
}

google.maps.event.addDomListener(window, 'load', initialize);