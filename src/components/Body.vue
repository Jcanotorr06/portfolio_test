<template>
  <div id="main">
    <About />
    <Experience />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import About from './About.vue'
import Experience from './Experience.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'

export default {
  name: 'Body',
  components: {
    About,
    Experience,
    Projects,
    Contact
  }
}
</script>

<style>
</style>
