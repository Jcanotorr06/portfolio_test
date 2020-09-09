<template>
  <section id="header">
    <header>
      <span class="image avatar"><img src="images/avatar.jpg" alt="" /></span>
      <h1 id="logo">Joseph Cano</h1>
      <p>I got reprogrammed by a rogue AI<br/>
      and now I'm totally cray</p>
    </header>
    <nav id="nav">
      <ul>
        <li><a href="#one" v-scroll-to="'#one'" class="item" @mouseover="e => e.target.classList.toggle('active')" @mouseout="e => e.target.classList.toggle('active')">
          About</a></li>
        <li><a href="#two" v-scroll-to="'#two'" class="item" @mouseover="e => e.target.classList.toggle('active')" @mouseout="e => e.target.classList.toggle('active')">
          Things I Can Do</a></li>
        <li><a href="#three" v-scroll-to="'#three'" class="item" @mouseover="e => e.target.classList.toggle('active')" @mouseout="e => e.target.classList.toggle('active')">
          A Few Accomplishments</a></li>
        <li><a href="#four" v-scroll-to="'#four'" class="item" @mouseover="e => e.target.classList.toggle('active')" @mouseout="e => e.target.classList.toggle('active')">
          Contact</a></li>
      </ul>
    </nav>
    <footer>
      <ul class="icons">
        <li><a href="https://twitter.com/josephcano" target="_blank" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
        <li><a href="https://open.spotify.com/user/zt2w32udeqcxs2446jjncvfvj" target="_blank" class="icon brands fa-spotify"><span class="label">Spotify</span></a></li>
        <li><a href="https://www.instagram.com/josc507/" target="_blank" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
        <li><a href="https://github.com/Jcanotorr06" target="_blank" class="icon brands fa-github"><span class="label">Github</span></a></li>
        <li><a href="mailto:josephct06@gmail.com" target="_blank" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
      </ul>
    </footer>
  </section>
</template>

<script>

export default {
  name: 'NavBar',
}
</script>

<style>
</style>
