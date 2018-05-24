<template>
	<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <div class="dropdown show">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Menu
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <router-link class="dropdown-item" to="/">Start</router-link>
              <router-link class="dropdown-item" to="karte">Karte</router-link>
              <router-link class="dropdown-item" to="ranking">Ranking</router-link>
              <router-link class="dropdown-item" to="formular">Formular</router-link>
            </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/about">Über dieses Projekt</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>
<script>
	export default {
		name: "navigation"
	}
</script>