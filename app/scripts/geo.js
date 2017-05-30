function initMap() {

    // // El navegador soporta geolocalización
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(
    //         successHandler, // manejador de respuesta correcta
    //         function() {}, // manejado de errores
    //         {} // opciones
    //     );
    // }
    // // El navegador no soporta geolocalización
    // else { /* Código*/ }

    // function successHandler(data) {
    //     var coords = data.coords;
    //     console.log("Latitud", coords.latitude);
    //     console.log("Longitud", coords.longitude);
    //     console.log("Precisión", coords.accuracy);
    //     console.log("Altitud", coords.altitude);
    //     console.log("Precisión de altitud", coords.altitudeAccuracy);
    //     // The heading as degrees clockwise from North
    //     console.log("Preguntar a marinero", coords.heading);
    //     console.log("Velocidad", coords.speed);

    var position = {
        lat: 40.004656,
        lng: -4.816989
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        center: position,
        zoom: 16
    });

    var marker = new google.maps.Marker({
        position: position,
        map: map
    });

}
