$(document).ready(function(){
    var x = document.getElementById("demo");
    function getLocation() {
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    function showPosition(position){
        //codeLatLng(position.coords.latitude, position.coords.longitude)
        loadWeather(position.coords.latitude+',' +position.coords.longitude)
    }
    var geocoder = new google.maps.Geocoder();

    function loadWeather(location, woeid) {
        $.simpleWeather({
            location: location,
            woeid: woeid,
            unit: 'f',
            success: function(weather) {
                html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
                html += '<div>'+weather.city+', '+weather.region+'</div>';
                html += '<div class="currently">'+weather.currently+'</div>';
                html += '<div>'+weather.alt.temp+'&deg;C</div></ul>';

                $("#demo").html(html);
            },
            error: function(error) {
                $("#demo").html('<p>'+error+'</p>');
            }
        });
    }

    getLocation();
    showPosition();
})