'use strict'

function initMap(lat, lng) {
    if (!lat) lat = 32.0749831;
    if (!lng) lat = 34.9120554;
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 29.55823779167494, lng: 34.9526631121632 },
        zoom: 18,
        mapId: '25c4971063e3a54',
        label: {
            text: 'Label text',
            fontFamily: "'PressStart', sans-serif",
        },
        gestureHandling: "cooperative",
        zoomControl: false,
        streetViewControl: false,
        gestureHandling: "cooperative"
    });

    var marker = new google.maps.Marker({
        position: { lat: 29.55823779167494, lng: 34.9526631121632 },
        map,
        title: 'You Are Here',
        icon: {
            url: '/img/ash.png',
            scaledSize: new google.maps.Size(40, 40)
        },
        animation: google.maps.Animation.DROP
    });

}
