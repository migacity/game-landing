<script setup lang="ts">
import { ref } from 'vue';
import conceptArt from './assets/top_illust.webp'
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
      <div class="header-image" :style="conceptartdiv">
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
        <p class="w-1/2 mx-auto">
          人類は滅びた<br />
          <br />
          それに伴い自然はかつての豊かさを取り戻し<br />
          <br />
          消えたはずの動物たちも数を増やし<br />
          <br />
          人によって滅ぼされた命の息吹は<br />
          <br />
          回復の兆しを見せつつあった<br />
          <br />
          <br />
          そんな中、無機質な機械音だけが鳴り響く一室に<br />
          <br />
          一人の青年がいた<br />
          <br />
          正確に言うと但し滅びたはずの人間ではなく<br />
          <br />
          青年の姿をしたアンドロイドである<br />
          <br />
          彼が見つめる先にあるのは４つのカプセル<br />
          <br />
          中にいるのは4人の女性<br />
          <br />
          <br />
          <br />
          これは<br />
          <br />
          <br />
          <br />
          人とアンドロイドが紡ぐ<br />
          <br />
          苦しくも儚いどうしようもなく終わってしまった物語
        </p>
      </section>

      <section>
        <div class="w-1/2 mx-auto">
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