import{d as a,c as n,a as u,u as d,b as i,e as f,o as x,f as p}from"./vendor.7860060c.js";const C=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}};C();var F="/game-landing/assets/123.2bdca1ec.webp";const b={class:"bg-white relative w-full h-screen"},g={class:"h-full"},B={class:"title flex flex-col text-center"},m=["src"],y=u("h1",{class:"mt-16 z-10 text-3xl",id:"\u65B0\u4F5C\u30B2\u30FC\u30E0\u5236\u4F5C\u6C7A\u5B9A"},"\u65B0\u4F5C\u30B2\u30FC\u30E0\u5236\u4F5C\u6C7A\u5B9A\uFF01",-1),E=u("h2",{class:"z-10 text-xl mt-4",id:"\u7D9A\u5831\u3092\u5F85\u3066"},"\u88FD\u4F5C\u30C1\u30FC\u30E0\u30E1\u30F3\u30D0\u30FC\u52DF\u96C6\u4E2D",-1),_=u("section",{class:"container mt-6 px-5 py-5 mx-auto flex flex-col text-center"},[u("h2",{class:"z-10 text-xl underline",id:"\u65B0\u7740\u60C5\u5831"},"\u65B0\u7740\u60C5\u5831"),u("ul",{class:"z-10 mt-5"},[u("li",null,[u("span",{class:"px-2 text-xs"},"2021/12/25"),i("\u30B3\u30F3\u30BB\u30D7\u30C8\u30A2\u30FC\u30C8\u3092\u516C\u958B\u3057\u307E\u3057\u305F\u3002")])])],-1),h=f('<main><section class="container px-5 py-5 mx-auto flex flex-col text-center"><h2 class="text-xl underline">\u4F5C\u54C1\u60C5\u5831</h2><table class="mt-5"><tbody class="border-b border-gray-200"><tr class="border-t border-gray-200"><td class="text-left bg-gray-100 px-2">\u5236\u4F5C\u9663</td><td class="text-left px-2">\u307F\u304C\u5E02\u30E1\u30F3\u30D0\u30FC\u6709\u5FD7\uFF08\u52DF\u96C6\u4E2D\uFF09</td></tr><tr class="border-t border-gray-200"><td class="text-left bg-gray-100 px-2">\u4F5C\u54C1\u30BF\u30A4\u30C8\u30EB</td><td class="text-left px-2">\u672A\u5B9A</td></tr><tr class="border-t border-gray-200"><td class="text-left bg-gray-100 px-2">\u30B8\u30E3\u30F3\u30EB</td><td class="text-left px-2">\u30CE\u30D9\u30EB\u30B2\u30FC\u30E0\uFF08\u30D5\u30EA\u30FC\u30B2\u30FC\u30E0\uFF09</td></tr><tr class="border-t border-gray-200"><td class="text-left bg-gray-100 px-2">\u5236\u4F5C\u671F\u9593</td><td class="text-left px-2">\u76EE\u5B89\u3068\u3057\u30663\u30F6\u6708\u7A0B\u5EA6</td></tr><tr class="border-t border-gray-200"><td class="text-left bg-gray-100 px-2">\u5BFE\u5FDC\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0</td><td class="text-left px-2">\u30D6\u30E9\u30A6\u30B6</td></tr><tr class="border-t border-gray-200"><td class="text-left bg-gray-100 px-2">\u516C\u958B\u65B9\u6CD5</td><td class="text-left px-2">\u30CE\u30D9\u30EB\u30B2\u30FC\u30E0\u6295\u7A3F\u30B5\u30A4\u30C8\u3084\u5C02\u7528\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u3067\u4E00\u822C\u516C\u958B</td></tr></tbody></table></section></main><footer class="text-gray-600 bod-font"><div class="container px-5 py-8 mx-auto flex items-center flex-col"><p>copyright miga-city</p></div></footer>',2),A=a({setup(c){return(s,o)=>(x(),n("div",b,[u("header",g,[u("section",B,[u("img",{class:"absolute h-full min-w-full object-cover object-center",src:d(F)},null,8,m),y,E]),_]),h]))}});p(A).mount("#app");
