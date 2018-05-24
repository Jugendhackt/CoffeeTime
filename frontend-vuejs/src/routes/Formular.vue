<template>
	<div class="container">
	    <div class="col-md-12">
	        <!--  Um  ein  horizontales  Formular  zu  erhalten,  muss  die  Klasse  "form-horizontal"  im  form-Element  vergeben  werden  -->
	        <!--  Action-URL wird via JavaScript eingefügt -->
	        <form class="form-horizontal" :action="apiUrl + '/addAutomat'" id="form" method="Post">
	            <!--  Jedes  Eingabefeld  muss  in  einem  <div  class="form-group">  liegen  -->
	            <div class="form-group">
	                <!--  Die  Angabe  class="control-label col-sm-2"  ist  notwendig,  damit  das  Feld  richtig  ausgerichtet  wird  -->
	                <label for="inputName" class="control-label col-sm-2">Name</label>
	                <div class="col-sm-10">
	                    <!--  Durch  das  Attribut  placeholder="Platzhalter"  wird  ein  Platzhalter  eingefügt  -->
	                    <input type="text" class="form-control" placeholder="Automat/Café" id="inputName" name="name">
	                </div>
	            </div>

	            <div class="form-group">
	                <!--  Die  Angabe  class="control-label col-sm-2"  ist  notwendig,  damit  das  Feld  richtig  ausgerichtet  wird  -->
	                <label for="inputAdresse" class="control-label col-sm-2">Adresse</label>
	                <div class="col-sm-10">
	                    <!--  Durch  das  Attribut  placeholder="Platzhalter"  wird  ein  Platzhalter  eingefügt  -->
	                    <input type="float" class="form-control" placeholder="Längengrad" id="inputAdresseL" name="lat">
	                    <!--  Mittels  class="help-block"  kann  ein  Hinweis  eingefügt  werden  -->
	                    <span class="help-block">zB. 6.258</span>
	                    <!--  Durch  das  Attribut  placeholder="Platzhalter"  wird  ein  Platzhalter  eingefügt  -->
	                    <input type="float" class="form-control" placeholder="Breitengrad" id="inputAdresseB" name="long">
	                    <!--  Mittels  class="help-block"  kann  ein  Hinweis  eingefügt  werden  -->
	                    <span class="help-block">zB. 55.941</span>
	                </div>
	            </div>

	            <!--  Auswahlfeld  -->
	            <div class="form-group">
	                <label for="inputGetränk">Art des Getränks</label>
	                <select id="inputGetränk" class="form-control" name="gArt">
	                    <option value="0">Kaffee</option>
	                    <option value="2">Tee</option>
	                    <option value="1">Kakao</option>

	                </select>
	            </div>

	            <div class="form-group">
	                <label for="inputGname" class="control-label col-sm-2">Getränke Name</label>
	                <div class="col-sm-10">
	                    <input type="text" placeholder="Name des Getränks" class="form-control" id="inputMenge" name="gName">
	                </div>
	            </div>

	            <div class="form-group">
	                <!--  Die  Angabe  class="control-label col-sm-2"  ist  notwendig,  damit  das  Feld  richtig  ausgerichtet  wird  -->
	                <label for="inputQualität" class="control-label col-sm-2">Qualität</label>
	                <div class="slider">
	                    <input id="slider" type="range" min="0" max="5" step="1.0" value="0" name="quality" v-model="stars">
	                    <output type="text" id="textInput" />
	                    <!--  Mittels  class="help-block"  kann  ein  Hinweis  eingefügt  werden  -->
	                    <span class="help-block">{{stars}} Sterne</span>
	                </div>
	            </div>

	            <div class="form-group">
	                <label for="inputKommentar" class="control-label col-sm-2">Kommentar</label>
	                <div class="col-sm-10">
	                    <input type="text" placeholder="War der Kaffee gut?" class="form-control" id="inputKommentar" name="comment">
	                </div>
	            </div>

	            <div class="form-group">
	                <label for="inputPreis" class="control-label col-sm-2">Preis</label>
	                <div class="col-sm-10">
	                    <input type="text" placeholder="Kosten" class="form-control" id="inputPreis" name="gPreis">
	                    <!--  Mittels  class="help-block"  kann  ein  Hinweis  eingefügt  werden  -->
	                    <span class="help-block"> in €</span>
	                </div>
	            </div>

	            <div class="form-group">
	                <label for="inputMenge" class="control-label col-sm-2">Menge</label>
	                <div class="col-sm-10">
	                    <input type="text" placeholder="Wie viel?" class="form-control" id="inputMenge">
	                    <!--  Mittels  class="help-block"  kann  ein  Hinweis  eingefügt  werden  -->
	                    <span class="help-block"> in ml</span>
	                </div>
	            </div>

	            <div class="form-group">
	                <label for="inputOffen" class="control-label col-sm-2">Öffnungszeiten</label>
	                <div class="col-sm-10">
	                    <input type="text" placeholder="Wie lange?" class="form-control" id="inputOffen" name="opens">
	                    <!--  Mittels  class="help-block"  kann  ein  Hinweis  eingefügt  werden  -->
	                    <span class="help-block">Hinweis: Uhrzeiten/Wochentage</span>
	                </div>
	            </div>

	            <div class="form-group">
	                <div class="col-sm-offset-2 col-sm-10">
	                    <!--  Du  Zuweisung  class="btn  btn-primary  macht  aus  der  Schaltflaeche  einen  schoenen  blauen  Button  -->
	                    <input class="btn  btn-primary" type="submit" value="Senden">
	                </div>
	            </div>
	        </form>
	    </div>
	</div>
</template>
<script type="text/javascript">
	import CONFIG from '@/config'

	export default {
		name: "formular",
		data() {
			return {
				apiUrl: CONFIG.server,
				stars: 0
			}
		}
	}
</script>