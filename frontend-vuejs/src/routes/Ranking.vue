<template>
	<div class="container">
	    <h2>Die besten Orte für dein nächstes Heißgetränk</h2>
	    <table class="table table-hover">
	      <thead>
	        <tr>
	          <th>Name</th>
	          <th>Standort Breitengrade</th>
	          <th>Standort Längengrad</th>
	          <th>Bewertung</th>
	        </tr>
	      </thead>
	      <tbody id= "Tabelle">
	      </tbody>
	    </table>
    </div>
</template>
<script type="text/javascript">
	import framework from './rankingFramework'

	export default {
		name: "ranking",
		mounted() {
			framework()
		}
	}
</script>