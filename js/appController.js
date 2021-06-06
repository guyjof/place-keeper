'use strict'
var gPlaces = getPlaces()

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

    new google.maps.Marker({
        position: { lat: 29.55823779167494, lng: 34.9526631121632 },
        map,
        title: 'You Are Here',
        icon: {
            url: '/img/ash.png',
            scaledSize: new google.maps.Size(40, 40)
        },
        animation: google.maps.Animation.DROP
    });

    function renderMarkers() {
        for (var i = 0; i < gPlaces.length; i++) {
            addPlace(gPlaces[i])
        }

    }

    google.maps.event.addListener(map, 'click', (event) => {
        addPlace({ coords: event.latLng });
    });


    function addPlace(place) {
        new google.maps.Marker({
            position: place.coords,
            map,
            title: 'Saved',
            icon: {
                url: '/img/pokeball.png',
                scaledSize: new google.maps.Size(40, 40)
            },
            animation: google.maps.Animation.DROP
        });

    }
}

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//         initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//         map.setCenter(initialLocation);
//     });
// }

function renderUserPrefs() {
    document.body.style.backgroundColor = loadFromStorage('color')
}

function onColor(color) {
    var currColor = color
    document.body.style.backgroundColor = currColor
    saveColor(color)
}

function onChangeAge() {
    var elAge = document.querySelector('.age-num');
    var elRange = document.querySelector('input[type="range"]');
    elAge.innerHTML = elRange.value
}


function onSaveChanges() {

}


