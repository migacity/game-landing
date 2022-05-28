<script setup lang="ts">
import conceptArt from './assets/123.webp'
import BgmControl from './components/BgmControl.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;900&display=swap');

* {
  font-family: "Noto Serif JP", serif;
  font-weight: 400;
}

</style>

<template>
  <div class="w-full">
    <header class="main-header">
      <div class="logo-container">
        <img id="logo"
          src="https://placehold.jp/24/3d4070/ffffff/250x71.jpg?text=%E6%B7%B1%E6%B7%B5%E3%81%AE%E3%82%A2%E3%83%B3%E3%83%89%E3%83%AD%E3%83%A1%E3%83%80" />
        <bgm-control class="bgm-control" />
      </div>
      <div class="header-image h-64">
      </div>
    </header>

    <main class="w-full flex flex-col gap-4 justify-center">
      <section>
        <h2 class="flex justify-center text-2xl">遊ぶ</h2>
        <p class="">ブラウザで遊ぶ</p>
        <p class="">ダウンロードして遊ぶ</p>
      </section>

      <section>
        <h2 class="flex justify-center text-2xl">ストーリー</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quasi inventore, tenetur reiciendis
          tempora
          voluptas perferendis eligendi. Commodi amet iure, nesciunt natus assumenda minus vitae. Maiores at quis
          tempore
          magni?</p>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="flex justify-center text-2xl">プレイ画面</h2>
        <img src="https://placehold.jp/320x180.jpg" />
        <img src="https://placehold.jp/320x180.jpg" />
      </section>

      <section>
        <h2 class="flex justify-center text-2xl">キャラクター</h2>

        <div>
          <h3>博士</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, odit quae expedita voluptatibus dolore
            nobis, facere voluptates reprehenderit illum, repellendus neque aspernatur eum itaque nam. Architecto,
            dicta.
            Tenetur, voluptas earum!</p>
        </div>

        <div>
          <h3>ロイド</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, odit quae expedita voluptatibus dolore
            nobis, facere voluptates reprehenderit illum, repellendus neque aspernatur eum itaque nam. Architecto,
            dicta.
            Tenetur, voluptas earum!</p>
        </div>

        <div>
          <h3>りな</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, odit quae expedita voluptatibus dolore
            nobis, facere voluptates reprehenderit illum, repellendus neque aspernatur eum itaque nam. Architecto,
            dicta.
            Tenetur, voluptas earum!</p>
        </div>

        <div>
          <h3>アトリア</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, odit quae expedita voluptatibus dolore
            nobis, facere voluptates reprehenderit illum, repellendus neque aspernatur eum itaque nam. Architecto,
            dicta.
            Tenetur, voluptas earum!</p>
        </div>

        <div>
          <h3>継</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, odit quae expedita voluptatibus dolore
            nobis, facere voluptates reprehenderit illum, repellendus neque aspernatur eum itaque nam. Architecto,
            dicta.
            Tenetur, voluptas earum!</p>
        </div>
      </section>

      <section>
        <h2 class="flex justify-center text-2xl">スタッフ</h2>
        <ul>
          <li>シナリオ
            <ul>
              <li>ゆぅさん</li>
              <li>かがり</li>
              <li>みやまくわがた</li>
              <li>dolphilia</li>
            </ul>
          </li>

          <li>グラフィック
            <ul>
              <li>ゆぅさん</li>
              <li>かがり</li>
              <li>みやまくわがた</li>
              <li>dolphilia</li>
              <li>hisayosi</li>
            </ul>
          </li>

          <li>デザイン協力
            <ul>
              <li>頭痛</li>
              <li>ぬのひと</li>
            </ul>
          </li>

          <li>オリジナルBGM
            <ul>
              <li>止由</li>
            </ul>
          </li>

          <li>スクリプト
            <ul>
              <li>idomshi</li>
              <li>純硫黄</li>
              <li>ゆぅさん</li>
              <li>dolphilia</li>
            </ul>
          </li>

          <li>アドバイザー
            <ul>
              <li>タク</li>
            </ul>
          </li>

          <li>素材提供
            <ul>

              <li>BGM,SE
                <ul>
                  <li>効果音ラボ 様</li>
                  <li>効果音辞典 様</li>
                  <li>効果音工房 様</li>
                  <li>魔王魂 様</li>
                </ul>
              </li>

              <li>背景
                <ul>
                  <li>ぱくたそ 様</li>
                  <li>ニコ二・コモンズ 様</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>テストプレイ
            <ul>
              <li>みが市 有志</li>
            </ul>
          </li>

          <li>制作
            <ul>
              <li>らいあ市</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2 class="flex justify-center text-2xl">ダウンロード</h2>
        <p>PC・Mac用のダウンロードリンクを置く</p>
      </section>
    </main>

    <footer class="">
      <div class="">
        <p>copyright raia-city</p>
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
  background-image: url('https://placehold.jp/96/70739e/ffffff/640x360.png?text=%E3%83%98%E3%83%83%E3%83%80%E3%83%BC%E7%94%BB%E5%83%8F');
}

ul {
  @apply mx-8;
  @apply list-disc;
}
</style>