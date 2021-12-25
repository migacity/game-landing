<script setup lang="ts">
import conceptArt from './assets/123.webp'
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
  <div class="bg-white relative w-full h-screen">
    <header class="h-full">
      <section class="title flex flex-col text-center">
        <img class="absolute h-full min-w-full object-cover object-center" :src="conceptArt" />
        <h1 class="mt-16 z-10 text-3xl" id="新作ゲーム制作決定">新作ゲーム制作決定！</h1>
        <h2 class="z-10 text-xl mt-4" id="続報を待て">製作チームメンバー募集中</h2>
      </section>
      <section class="container mt-6 px-5 py-5 mx-auto flex flex-col text-center">
        <h2 class="z-10 text-xl underline" id="新着情報">新着情報</h2>
        <ul class="z-10 mt-5">
          <li><span class="px-2 text-xs">2021/12/25</span>コンセプトアートを公開しました。</li>
        </ul>
      </section>
    </header>
    <main>
      <section class="container px-5 py-5 mx-auto flex flex-col text-center">
        <h2 class="text-xl underline">作品情報</h2>
        <table class="mt-5">
          <tbody class="border-b border-gray-200">
            <tr class="border-t border-gray-200">
              <td class="text-left bg-gray-100 px-2">制作陣</td>
              <td class="text-left px-2">みが市メンバー有志（募集中）</td>
            </tr>
            <tr class="border-t border-gray-200">
              <td class="text-left bg-gray-100 px-2">作品タイトル</td>
              <td class="text-left px-2">未定</td>
            </tr>
            <tr class="border-t border-gray-200">
              <td class="text-left bg-gray-100 px-2">ジャンル</td>
              <td class="text-left px-2">ノベルゲーム（フリーゲーム）</td>
            </tr>
            <tr class="border-t border-gray-200">
              <td class="text-left bg-gray-100 px-2">制作期間</td>
              <td class="text-left px-2">目安として3ヶ月程度</td>
            </tr>
            <tr class="border-t border-gray-200">
              <td class="text-left bg-gray-100 px-2">対応プラットフォーム</td>
              <td class="text-left px-2">ブラウザ</td>
            </tr>
            <tr class="border-t border-gray-200">
              <td class="text-left bg-gray-100 px-2">公開方法</td>
              <td class="text-left px-2">ノベルゲーム投稿サイトや専用ウェブサイトで一般公開</td>
            </tr>
          </tbody>
        </table>
      </section>

    </main>
    <footer class="text-gray-600 bod-font">
      <div class="container px-5 py-8 mx-auto flex items-center flex-col">
        <p>copyright miga-city</p>
      </div>
    </footer>
  </div>
</template>
