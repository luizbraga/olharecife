var roteirosNomes = [];
var map = null;
var markers = [];

$(document).ready(function(){


    $('#icon').click(function () {
        $('.search').toggleClass('expanded');
    });

    $('#btn-pe').click(function(){
        $( "#btn-bike" ).toggle(300);
        $( "#btn-barco" ).toggle(300);
        $( "#btn-onibus" ).toggle(300);
    });
    $('#btn-bike').click(function(){
        $( "#btn-pe" ).toggle(300);
        $( "#btn-barco" ).toggle(300);
        $( "#btn-onibus" ).toggle(300);
    });
    $('#btn-barco').click(function(){
        $( "#btn-bike" ).toggle(300);
        $( "#btn-pe" ).toggle(300);
        $( "#btn-onibus" ).toggle(300);
    });
    $('#btn-onibus').click(function(){
        $( "#btn-bike" ).toggle(300);
        $( "#btn-barco" ).toggle(300);
        $( "#btn-pe" ).toggle(300);
    });

    $( "#search-box" ).autocomplete({
      source: roteirosNomes
    });

    document.getElementById("search-box").addEventListener( "keydown", function( e ) {
        var keyCode = e.keyCode || e.which;
        if ( keyCode === 13 ) {
           // Find the route object from the search
           var input = document.getElementById('search-box').value;
           for (key in routes) {
                if (routes[key].nome == input) {
                    document.getElementById("roteiro").innerHTML = routes[key].nome;
                    setMarkers(routes[key]);
                } else {
                    console.log("Rota não encontrada");
                }
           }
        }
    }, false);

});


function setMarkers(route) {
    removeAllMarkers();
    for(key in route.places) {
        var marker = new google.maps.Marker({
              position: new google.maps.LatLng(route.places[key].latitude, route.places[key].longitude),
              map: map,
              title: route.places[key].nome
          });
        markers.push(marker);
    }

}

function removeAllMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
}

function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        center: new google.maps.LatLng(-8.062491, -34.872888),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    map = new google.maps.Map(mapCanvas,mapOptions);


}

google.maps.event.addDomListener(window, 'load', initialize);