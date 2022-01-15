<script setup lang="ts">
import conceptArt from './assets/123.webp'
import BgmControl from './components/BgmControl.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;900&display=swap');
.title h1, .title h2 {
  font-family: "Noto Serif JP", serif;
  font-weight: 900;
}
main, footer {
  font-family: "Noto Serif JP", serif;
  font-weight: 400;
}
</style>

<template>
  <div>
    <header class="main-header">
      <div class="logo-container">
        <img id="logo" src="https://placehold.jp/24/3d4070/ffffff/250x71.jpg?text=%E6%B7%B1%E6%B7%B5%E3%81%AE%E3%82%A2%E3%83%B3%E3%83%89%E3%83%AD%E3%83%A1%E3%83%80" />
        <bgm-control class="bgm-control" />
      </div>
    <div class="header-image">
      <p>hoge</p>
    </div>

    </header>
    <section>
      <h2 class="sectionTitle">title</h2>
      <img src="https://placehold.jp/320x180.jpg" />
      <img src="https://placehold.jp/320x180.jpg" />
    </section>
    <footer class="">
      <div class="">
        <p>copyright miga-city</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.logo-container {
  position: absolute;
}
.bgm-control {
  position: absolute;
}
.header-image {
  width: 640px;
  height: 360px;
  background-image: url('https://placehold.jp/96/70739e/ffffff/640x360.png?text=%E3%83%98%E3%83%83%E3%83%80%E3%83%BC%E7%94%BB%E5%83%8F');
}
</style>