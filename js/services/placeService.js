'use strict'

var gPlaces = [{ coords: { lat: 29.558194724113807, lng: 34.95236593674963 } }];


function createPlace(name) {
    var place = {
        name,
        id: makeId(),
        lat: 1,
        lng: 1
    };
    return gPlaces.push(place);
}

function addPlace() {

}

function removePlace() {

}


function getPlaces() {
    var places = gPlaces;
    return places;
}