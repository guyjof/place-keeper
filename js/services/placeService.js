'use strict'

var gPlaces = [];


function createPlace(name) {
    var place = {
        name,
        id: makeId(),
        lat: 1,
        lng: 1
    };
    return gPlaces.push(place);
}