var mymap = L.map('mapid').setView([50.941,6.958], 13);
var markers=[];

function addMarker(x,y){
  var marker = L.marker([x, y]).addTo(mymap);
  markers.push(marker);
  marker.on('click', showPopup)
}
function showPopup(e){
  e.target.bindPopup('<b>Hello world!</b><br>I am a popup</b><br><a href="https://www.google.de">more information</a>').openPopup();
}
addMarker(50.941,6.958);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZWxpc2FiZXRoc2NoaWVsZSIsImEiOiJjamdpMnFpcXowaWJwMnFwams4aWk5YXl3In0.IuvGOgBuRE6_BMIkhE7Okg'
}).addTo(mymap);
