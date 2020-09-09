<template>
  <div id="wrapper">
    <vue-headful title="Joseph Cano | Web Developer & Software Engineer" />
    <!--HelloWorld msg="Welcome to Your Vue.js App"/-->
    <NavBar />
    <Body />
    <section id="footer">
    </section>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import Body from './components/Body.vue'

export default {
  name: 'App',
  components: {
    Body,
    NavBar,
    //HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
