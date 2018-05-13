var mymap = L.map('mapid').setView([50.941,6.958], 13);
var markers=[];

function addMarker(location){
  var marker = L.marker([location.long,location.lat]).addTo(mymap);
  markers.push(marker);
  marker.on('click', function (){
    var stars = '';
    for(var i=1; i<=5;i++){
      if(i<=location.quality){
        stars +='<span class="fa fa-star checked"></span>'
      }
      else{
        stars +='<span class="fa fa-star unchecked"></span>'
      }
    }

    marker.bindPopup('<b>'+location.name+'</b><br>Bewertung: '+stars+'</b><br><button type="button" class="btn btn-primary" data-id="'+location.id+'"data-toggle="modal" data-target="#exampleModal">more info</button>').openPopup();

    location.drinks=[{name:"kurt", quality:2},{name:"hans", quality: 5}]
    var info = '';
    for(var i=0; i<location.drinks.length; i++){
        var drink= location.drinks[i];

        var stars = '';
        for(var j=1; j<=5;j++){
          if(j<=drink.quality){
            stars +='<span class="fa fa-star checked"></span>'
          }
          else{
            stars +='<span class="fa fa-star unchecked"></span>'
          }
        }
        info +='<div><div><b>Name: '+drink.name+'</b></div><div>Bewertung: '+stars+'</div><hr></div>'
    }
    document.getElementById('content').innerHTML = info;
    document.getElementById('contentTitle').innerHTML = location.name;
  })
}

function addContent(trinken){
  var neu = "neuer <b>fetter<\/b> Text";
   document.getElementById('content').innerHTML = neu;
}



/*$("body").on("click",".more",function(){
  fetch('http://10.23.42.102:8081/'+$(this).attr("data-id")+'/getHeisseGetreanke')
    .then(function(response){
      return response.json();
    })
    .then(function(myJson){
      console.log(myJson);
      myJson.forEach(addContent)
    });
})*/



L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZWxpc2FiZXRoc2NoaWVsZSIsImEiOiJjamdpMnFpcXowaWJwMnFwams4aWk5YXl3In0.IuvGOgBuRE6_BMIkhE7Okg'
}).addTo(mymap);

fetch('http://10.23.42.102:8081/getAll')
  .then(function(response){
    return response.json();
  })
  .then(function(myJson){
    console.log(myJson);
    myJson.forEach(addMarker)
  });
