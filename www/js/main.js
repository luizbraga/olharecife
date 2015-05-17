var roteirosNomes = [];

$(document).ready(function(){


    $('#icon').click(function () {
        $('.search').toggleClass('expanded');
    });

    $('#btn-pe').click(function(){
        $( "#btn-carro" ).toggle(300);
        $( "#btn-rio" ).toggle(300);
        $( "#btn-onibus" ).toggle(300);
    });
    $('#btn-carro').click(function(){
        $( "#btn-pe" ).toggle(300);
        $( "#btn-rio" ).toggle(300);
        $( "#btn-onibus" ).toggle(300);
    });
    $('#btn-rio').click(function(){
        $( "#btn-carro" ).toggle(300);
        $( "#btn-pe" ).toggle(300);
        $( "#btn-onibus" ).toggle(300);
    });
    $('#btn-onibus').click(function(){
        $( "#btn-carro" ).toggle(300);
        $( "#btn-rio" ).toggle(300);
        $( "#btn-pe" ).toggle(300);
    });

    $('input.typeahead').typeahead(null, {
		displayKey: 'num',
        source: numbers.ttAdapter()
	});


});



function initialize() {
    var markers = [];
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        center: new google.maps.LatLng(-8.062491, -34.872888),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(mapCanvas,mapOptions);


}

google.maps.event.addDomListener(window, 'load', initialize);