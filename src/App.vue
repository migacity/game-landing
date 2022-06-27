<script setup lang="ts">
import { ref } from 'vue';
import conceptArt from './assets/top_illust.webp'
import logoImage from './assets/logo.webp'
import ss_001 from './assets/ss_001.webp'
import ss_002 from './assets/ss_002.webp'
import ss_003 from './assets/ss_003.webp'
import ss_004 from './assets/ss_004.webp'
import ss_005 from './assets/ss_005.webp'
import TwitterLink from './components/TwitterLink.vue';

const conceptartdiv = ref(`background-image: url("${conceptArt}")`)
</script>

<style>
</style>

<template>
  <div class="w-full bg-gradient-to-b from-[#8fc0ff] to-[#d4eafb]">
    <header class="main-header shadow-md">
      <div class="header-image flex items-start justify-start" :style="conceptartdiv">
        <img :src="logoImage" class="ml-8 mt-4 h-28 z-20 md:h-32 lg:h-40" />
      </div>
    </header>

    <main class="w-full flex flex-col gap-4 justify-center mt-8">
      <section class="flex flex-col gap-4">
        <h2 class="flex justify-center text-2xl">遊ぶ</h2>
        <div class="flex gap-4 justify-center">
          <a href="https://novelgame.jp/games/show/6721">
            <div class="px-6 py-2 bg-emerald-300/25 border-2 rounded-md flex flex-col justify-center items-center shadow-lg text-center hover:bg-teal-200/50 hover:shadow-sm hover:translate-y-0.5">
              <span class="font-sans font-bold">ノベコレで遊ぶ</span><span class="text-sm">ノベルコレクションのサイトに<br />ジャンプします</span>
            </div>
          </a>
        </div>
      </section>
      <section class="w-2/3 mx-auto p-2 bg-white/25 rounded-lg">
        <h2 class="flex justify-center text-2xl">最新情報</h2>
        <div class="flex gap-0 justify-center items-center">
          check for twitter &nbsp; <twitter-link name="raiacity" class="underline">@raiacity</twitter-link>!
        </div>
      </section>

      <section class="w-2/3 mx-auto p-2 bg-white/25 rounded-lg">
        <h2 class="flex justify-center text-2xl">ストーリー</h2>
        <p class="w-fit max-w-full mx-auto">
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
        <div class="w-2/3 mx-auto p-2 bg-white/25 rounded-lg">
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
        <div class="w-2/3 mx-auto p-2 bg-white/25 rounded-lg">
          <h2 class="flex justify-center text-2xl">プレイ画面</h2>
          <div class="flex gap-2 justify-center flex-col md:flex-row md:flex-wrap m-auto">
            <img :src="ss_001" class="w-full md:w-5/12" />
            <img :src="ss_002" class="w-full md:w-5/12" />
            <img :src="ss_003" class="w-full md:w-5/12" />
            <img :src="ss_004" class="w-full md:w-5/12" />
            <img :src="ss_005" class="w-full md:w-5/12" />
          </div>
        </div>
      </section>

      <section class="characters flex flex-col gap-2 w-2/3 mx-auto p-2 bg-white/25 rounded-lg">
        <h2 class="flex justify-center text-2xl">キャラクター</h2>
        <div class="w-fit max-w-full mx-auto">

          <div>
            <h3 class="text-xl">ロイド</h3>
            <p>博士によって開発された男性型アンドロイド。1000年近く研究所の管理に携わり、コールドスリープ中の博士たちを守り続けていた。</p>
            <p>物語は、彼が博士をコールドスリープから目覚めさせるところから始まる……。</p>
          </div>

          <div>
            <h3 class="text-xl">博士</h3>
            <p>ロイドを開発した科学者。1000年前の世界で、人類滅亡を回避するためコールドスリープ施設建造に関わり、自身もコールドスリープに入った。</p>
            <p>聡明な女性であるが、人間的なところも併せ持つ。</p>
            <p>目覚めた先の世界において、彼女は何を思うのか？</p>
          </div>

          <div>
            <h3 class="text-xl">継</h3>
            <p>若干直情的な性格ではあるが、前向きに物事をとらえて進んでいける性格の少女。</p>
            <p>彼女のアグレッシブな行動は、やがてロイド、そして彼女自身も予想だにしない世界へ二人を導いていく。</p>
            <p>自称自動車ゴールド免許所持者。</p>
          </div>

          <div>
            <h3 class="text-xl">アトリア</h3>
            <p>少数民族の生き残りの少女。快活で食欲旺盛。</p>
            <p>「おなかいっぱい食べたい」という純粋極まりない理由で食べるものを探しに行く彼女は、1000年後の世界において少し心温まる存在、なのかもしれない。</p>
          </div>

          <div>
            <h3 class="text-xl">りな</h3>
            <p>1000年前にはミッション系の学校（神学校）を目指していた少女。りかという姉がいるらしい。</p>
            <p>プロファイリングに造詣が深く、出会ったばかりのロイドの性格を即座に察する。</p>
            <p>しかし1000年という長い時間は、彼女にも察せないことを引き起こしていたようで……？</p>
          </div>
        </div>
      </section>

      <section class="w-2/3 mx-auto p-3 bg-white/25 rounded-lg">
        <h2 class="flex justify-center text-2xl">スタッフ</h2>
        <ul class="stafflist">
          <li>
            <h3>原案</h3>
            <ul>
              <li>dolphilia</li>
              <li class="name-item">かがり <twitter-link name="qTsaK7ZhvNFYtsT"></twitter-link></li>
            </ul>
          </li>

          <li>
            <h3>シナリオ</h3>
            <ul>
              <li class="name-item">ゆぅさん <twitter-link name="mofumaru_yu"></twitter-link>
              </li>
              <li>かがり</li>
              <li class="name-item">みやまくわがた <twitter-link name="agoganihon"></twitter-link></li>
              <li>dolphilia</li>
            </ul>
          </li>

          <li>
            <h3>グラフィック</h3>
            <ul>
              <li>ゆぅさん</li>
              <li>かがり</li>
              <li>みやまくわがた</li>
              <li>dolphilia</li>
              <li class="name-item">hisayosi <twitter-link name="hisayosi1987"></twitter-link></li>
            </ul>
          </li>

          <li>
            <h3>デザイン協力</h3>
            <ul>
              <li>頭痛</li>
              <li>ぬのひと</li>
            </ul>
          </li>

          <li>
            <h3>オリジナルBGM</h3>
            <ul>
              <li>
                <h4>楽曲</h4>
                <ul>
                  <li>止由<twitter-link name="masa_chuu"></twitter-link></li>
                </ul>
              </li>
              <li>
                <h4>歌</h4>
                <ul>
                  <li>ちっぷす</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <h3>ナレーション</h3>
            <ul>
              <li>ちっぷす</li>
            </ul>
          </li>

          <li>
            <h3>スクリプト</h3>
            <ul>
              <li class="name-item">idomshi <twitter-link name="idomshi"></twitter-link></li>
              <li>純硫黄</li>
              <li>ゆぅさん</li>
              <li>dolphilia</li>
            </ul>
          </li>

          <li>
            <h3>アドバイザー</h3>
            <ul>
              <li>タク</li>
              <li class="name-item">ギムレット <twitter-link name="mariaasamiya"></twitter-link></li>
            </ul>
          </li>

          <li>
            <h3>素材提供</h3>
            <ul>

              <li>
                <h4>BGM,SE</h4>
                <ul>
                  <li><a href="https://soundeffect-lab.info/">効果音ラボ 様</a></li>
                  <li><a href="https://sounddictionary.info/">効果音辞典 様</a></li>
                  <li><a href="https://umipla.com">効果音工房 様</a></li>
                  <li><a href="https://maou.audio/category/bgm/">魔王魂 様</a></li>
                </ul>
              </li>

              <li>
                <h4>背景</h4>
                <ul>
                  <li><a href="https://www.pakutaso.com/">ぱくたそ 様</a></li>
                  <li><a href="https://commons.nicovideo.jp/">ニコニ・コモンズ 様</a></li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <h3>テストプレイ</h3>
            <ul>
              <li>みが市 有志</li>
            </ul>
          </li>

          <li>
            <h3>制作</h3>
            <ul>
              <li>らいあ市</li>
            </ul>
          </li>
        </ul>
      </section>

      <!-- <section>
        <h2 class="flex justify-center text-2xl">ダウンロード</h2>
        <p>PC・Mac用のダウンロードリンクを置く</p>
      </section> -->
    </main>

    <footer class="px-4 py-2 mt-2 bg-white rounded-lg shadow flex items-center justify-center">
        <p class="">&copy; 2022 らいあ市</p>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

* {
  font-family: "Noto Serif JP", serif;
  font-weight: 400;
}

h2 {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
}

h3 {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
}

h4 {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
}

.logo-container {
  position: absolute;
}

.bgm-control {
  position: absolute;
}

.header-image {
  @apply h-64 bg-local bg-bottom bg-cover lg:h-80 xl:h-96;
}

.stafflist {
  @apply text-xl flex flex-row flex-wrap;
  text-align: center;
}

.stafflist>li {
  @apply mt-4 block w-64 min-w-fit mx-auto;
}

.stafflist h3 {
  @apply text-base text-cyan-900;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
}

.stafflist h4 {
  @apply text-sm mt-2 text-cyan-700;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
}

.stafflist>li>ul {
  @apply text-base;
}

.stafflist .name-item {
  @apply flex items-center justify-center;
}

.stafflist>li>ul>li>ul {
  @apply mt-1;
}

li>a {
  @apply underline;
}
</style>