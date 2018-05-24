<template>
  <div id="app">
    <main>
      <navigation />
      <pageheader />
      <router-view></router-view>
      <pagefooter />
    </main>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    'navigation': Navigation,
    'pageheader': Header,
    'pagefooter': Footer,
  }
}
</script>