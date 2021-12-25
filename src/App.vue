<script setup lang="ts">
import conceptArt from './assets/123.webp'
</script>

<template>
  <div class="bg-white relative w-full h-screen">
    <header class="container h-full">
      <section class="flex flex-col text-center">
        <img class="absolute h-full min-w-full object-cover" :src="conceptArt" />
        <h1 class="mt-16 z-10 text-3xl" id="新作ゲーム制作決定">新作ゲーム制作決定！</h1>
        <h2 class="z-10 text-xl mt-8" id="続報を待て">製作チームメンバー募集中</h2>
    </section>
    </header>
    <main>
    <section class="container px-5 py-5 mx-auto flex flex-col text-center">
        <h2 class="text-xl underline">作品情報</h2>
      <ul class="mt-5">
        <li>製作陣：みが市メンバー有志（募集中）</li>
        <li>作品タイトル：未定</li>
          <li>ジャンル：ノベルゲーム（フリーゲーム）</li>
          <li>製作期間：3ヶ月程度を目安としています</li>
          <li>対応プラットフォーム：ブラウザ</li>
          <li>公開方法：ノベルゲーム投稿サイトや専用ウェブサイトで一般公開</li>
      </ul>
    </section>

    <section class="container px-5 py-5 mx-auto flex flex-col text-center">
      <h2 class="text-xl underline" id="新着情報">新着情報</h2>
      <ul class="mt-5">
          <li>2021/12/25: コンセプトアートを公開しました。</li>
      </ul>
    </section>
  </main>
  <footer class="text-gray-600 bod-font">
    <div class="container px-5 py-8 mx-auto flex items-center flex-col">
      <p>copyright miga-city</p>
    </div>
  </footer>
</div>
</template>
