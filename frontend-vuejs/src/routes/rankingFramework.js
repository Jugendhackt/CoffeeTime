import CONFIG from '@/config'

function top10(getraenk) {
  var html = '';
  html += '<tr>';
  html += '<td>' + getraenk.name + '</td>';
  html += '<td>' + getraenk.long + '</td>';
  html += '<td>' + getraenk.lat + '</td>';
  html += '<td>' + getraenk.quality + '</td>';
  html += '</tr>';
  document.getElementById('Tabelle').innerHTML += html;
}

/*
<tr>
  <td>John</td>
  <td>Doe</td>
  <td>john@example.com</td>
  <td>Something</td>
</tr>
*/

export default function() {
  fetch(CONFIG.server + '/sortByRating')
  .then(function(response){
    return response.json();
  })
  .then(function(myJson){
    myJson.forEach(top10)
  });
}