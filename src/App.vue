<script setup lang="ts">
import { ref } from 'vue';
import conceptArt from './assets/top_illust.webp'
import logoImage from './assets/7a8481eb2e97d5e6.webp'
import BgmControl from './components/BgmControl.vue';

const conceptartdiv = ref(`background-image: url("${conceptArt}")`)
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
        <bgm-control class="bgm-control" />
      </div>
      <div class="header-image flex items-center justify-center" :style="conceptartdiv">
        <img :src="logoImage" class="h-40 drop-shadow-[0_10px_10px_rgba(0,0,0,1.00)]" />
      </div>
    </header>

    <main class="w-full flex flex-col gap-4 justify-center">
      <section class="flex flex-col gap-4">
        <h2 class="flex justify-center text-2xl">遊ぶ</h2>
        <div class="flex gap-4 justify-center">
          <p class="h-16 w-60 bg-gray-400 rounded-md flex justify-center items-center shadow-lg">ブラウザで遊ぶ</p>
          <p class="h-16 w-60 bg-gray-400 rounded-md flex justify-center items-center shadow-lg">ダウンロードして遊ぶ</p>
        </div>
      </section>

      <section>
        <h2 class="flex justify-center text-2xl">ストーリー</h2>
        <p class="w-2/3 mx-auto">
          人類が滅亡した世界<br />
          <br />
          自然はかつての豊かさを取り戻し<br />
          生命の息吹は回復の兆しを見せつつある<br />
          <br />
          そんな中に青年の姿をしたアンドロイドが<br />
          無機質な部屋に佇んでいた<br />
          <br />
          彼が見つめるのはカプセルの中で眠る４人の少女たち<br />
          <br />
          これは<br />
          <br />
          アンドロイドと少女が紡ぐ<br />
          儚く切ない終焉の物語
        </p>
      </section>

      <section>
        <div class="w-2/3 mx-auto">
          <h2 class="flex justify-center text-2xl">舞台設定</h2>
          <h3 class="flex justify-center text-xl">研究所</h3>
          <p>本作の主人公ロイドが暮らす研究所。博士のほか数人が永い眠りについているようだ。周辺に森や海がある。</p>
          <h3 class="flex justify-center text-xl">塔</h3>
          <p>そびえたつ塔。何かの施設らしい。</p>
          <!-- <h3 class="flex justify-center text-xl">海</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quasi inventore, tenetur reiciendis
            tempora
            </p> -->
          <h3 class="flex justify-center text-xl">商店街・学校</h3>
          <p>既に使われていない。</p>
          <!-- <h3 class="flex justify-center text-xl">温泉</h3>
          <p>温かいお湯に身体を浸けると疲れが取れる。</p> -->
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="flex justify-center text-2xl">プレイ画面</h2>
        <img src="https://placehold.jp/320x180.jpg" />
        <img src="https://placehold.jp/320x180.jpg" />
      </section>

      <section class="characters flex flex-col gap-2">
        <h2 class="flex justify-center text-2xl">キャラクター</h2>

        <div>
          <h3 class="text-xl">博士</h3>
          <p>コールドスリープ施設の研究者。ロイドの生みの親。1000年以上寝てたけどまた寝た。</p>
        </div>

        <div>
          <h3 class="text-xl">ロイド</h3>
          <!-- <p>アンドロイド。個性的な少女たちと上手くコミュニケーションが取れるか不安。</p> -->
          <p>1000年以上コールドスリープされていた博士たちを守っていたイケメン。<br />
            博士に最高傑作と言われ、コーヒーを入れるのがうまいといわれるイケメン。<br />
            なんなら博士に抱きしめてさえもらえるイケメン。<br />
            しつこいようだがイケメン。</p>
        </div>

        <div>
          <h3 class="text-xl">りな</h3>
          <p>姉のりかもロイドと会ったことがあるようで……？</p>
        </div>

        <div>
          <h3 class="text-xl">アトリア</h3>
          <p>無邪気で元気な少女。小柄でよく跳びはねる。はらぺこ。</p>
        </div>

        <div>
          <h3 class="text-xl">継</h3>
          <p>ゴールド免許所持者。</p>
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
  @apply h-64 bg-local bg-bottom bg-cover;
}

ul {
  @apply mx-8;
  @apply list-disc;
}

main>section {
  @apply bg-gray-50;
}

.characters div {
  @apply w-1/2 mx-auto;
}
</style>