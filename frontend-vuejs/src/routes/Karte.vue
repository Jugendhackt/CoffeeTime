<template>
	<div>
		<div id="mapid" class="map" style="height: 600px"></div>

		<!-- Modal -->
	    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	      <div class="modal-dialog" role="document">
	        <div class="modal-content">
	          <div class="modal-header">
	            <h5 class="modal-title" id="contentTitle"></h5>
	            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	              <span aria-hidden="true">&times;</span>
	            </button>
	          </div>
	          <div class="modal-body">
	            <div id="content"></div>
	          </div>
	        </div>
	      </div>
	    </div>

	    <div class="modal fade" id="bewertungModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	      <div class="modal-dialog" role="document">
	        <div class="modal-content">
	          <div class="modal-header">
	            <h5 class="modal-title" id="bewertungTitle">Bewertung</h5>
	            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	              <span aria-hidden="true">&times;</span>
	            </button>
	          </div>
	          <div class="modal-body">
	            <form id="formularId" action='' method="post">
	              <div  class="form-group">
	                <!--  Die  Angabe  class="control-label col-sm-2"  ist  notwendig,  damit  das  Feld  richtig  ausgerichtet  wird  -->
	                  <label  for="inputQualität"  class="control-label col-sm-2">Qualität</label>
	                    <div  class="slider">
	      					           <input id="slider" type="range" min="0" max="5" step="1.0" value="0" name="quality" onchange="updateText(this.value)">
	      					                <output type="text" id="textInput" />
	      					<!--  Mittels  class="help-block"  kann  ein  Hinweis  eingefügt  werden  -->
	                          <span  class="help-block">Sterne</span>
	                    </div>
	              </div>
	              <button class='btn-karte-popup'>Speichern</button>
	            </form>
	          </div>
	        </div>
	      </div>
	    </div>
	</div>
</template>
<script type="text/javascript">
	import karteFramework from '@/routes/karteFramework.js';
	export default {
		name: "map",
		mounted() {
			karteFramework()
		}
	}
</script>
<style type="text/css">
	
</style>