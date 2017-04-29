var mymap = L.map('mapid').setView([31.35364, 15.11719], 3);

mymap.zoomControl.remove();

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    id: 'mapbox.streets'
}).addTo(mymap);

// mymap.dragging.disable();
// mymap.touchZoom.disable();
// mymap.doubleClickZoom.disable();
// mymap.scrollWheelZoom.disable();
// mymap.boxZoom.disable();
// mymap.keyboard.disable();

window.onload = function() {
  generateCirclesEurasia();
  generateCirclesAfrica();
  generateCirclesSA();
  generateCirclesNA();
};

function generateCirclesEurasia() {
    for (i = 0; i < (Math.floor(Math.random() * (220 - 200)) + 220); i++) {
        var lat = parseFloat(Math.min(37.43997 + (Math.random() * (70.84467 - 37.43997)),70.84467).toFixed(3));
        var long = parseFloat(Math.min(-8.4375 + (Math.random() * (116.01563 - -8.4375)),116.01563).toFixed(3));

        L.circle([lat, long], 1500, {
            color: 'red',
            size: 50,
            fillColor: '#f03',
            fillOpacity: 0.5
        }).addTo(mymap);
    }
}

function generateCirclesAfrica() {
    for (i = 0; i < (Math.floor(Math.random() * (30 - 20)) + 30); i++) {
        var lat = parseFloat(Math.min(-18.47961 + (Math.random() * (29.993 - -18.47961)),29.993).toFixed(3));
        var long = parseFloat(Math.min(14.23828 + (Math.random() * (39.02344 - 14.23828)),39.02344).toFixed(3));

        L.circle([lat, long], 1500, {
            color: 'red',
            size: 50,
            fillColor: '#f03',
            fillOpacity: 0.5
        }).addTo(mymap);
    }
}

function generateCirclesSA() {
    for (i = 0; i < (Math.floor(Math.random() * (30 - 20)) + 30); i++) {
        var lat = parseFloat(Math.min(-18.47961 + (Math.random() * (9.62241 - -18.47961)),9.62241).toFixed(3));
        var long = parseFloat(Math.min(-78.39844 + (Math.random() * (-48.33984 - -78.39844)),-48.33984).toFixed(3));

        L.circle([lat, long], 1500, {
            color: 'red',
            size: 50,
            fillColor: '#f03',
            fillOpacity: 0.5
        }).addTo(mymap);
    }
}

function generateCirclesNA() {
    for (i = 0; i < (Math.floor(Math.random() * (30 - 20)) + 100); i++) {
        var lat = parseFloat(Math.min(31.65338 + (Math.random() * (52.69636 - 31.65338)),52.69636).toFixed(3));
        var long = parseFloat(Math.min(-85.60547 + (Math.random() * (-76.46484 -  -85.60547)),-76.46484).toFixed(3));

        L.circle([lat, long], 1500, {
            color: 'red',
            size: 50,
            fillColor: '#f03',
            fillOpacity: 0.5
        }).addTo(mymap);
    }
}

// L.circle([51.508, -0.11], 500, {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5
// }).addTo(mymap);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

