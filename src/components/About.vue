<template>
  <section id="one">
    <div class="image main" data-position="center">
      <img src="images/banner2.jpg" alt="" />
      <h1 class="centro">Hello, World!</h1>
    </div>
    <div class="container">
      <header class="major">
        <h2>Read Only</h2>
        <p>Just an incredibly simple responsive site<br />
        template freebie by <a href="http://html5up.net">HTML5 UP</a>.</p>
      </header>
      <p>Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col. Commodo id in arcu ante lorem ipsum sed accumsan erat praesent faucibus commodo ac mi lacus. Adipiscing mi ac commodo. Vis aliquet tortor ultricies non ante erat nunc integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum.</p>
      <a href="resume.pdf" target="_blank" class="button alt">Check Out My Résumé</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style>
.image{
  position: relative;
  text-align: center;
}
.centro{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 500%;
  font-weight: bold;
  color: #ffffff;
}
</style>
