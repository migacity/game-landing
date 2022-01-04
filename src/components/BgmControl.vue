<script setup lang="ts">
import { ref } from 'vue'
import bgm01 from '../assets/8f9ecc1274fdf989.mp3'
import volumeSlash from '../assets/iconsax/volume-slash.svg'
import volumeHigh from '../assets/iconsax/volume-high.svg'

const buttonCaption = ref('bgm on')
const muted = ref(true)
const bgm = ref<HTMLAudioElement>()
const bgmToggle = () => {
  if (bgm.value === null) { return }
  bgm.value?.play()
  muted.value = !muted.value
  buttonCaption.value = muted.value ? 'bgm on' : 'bgm off'
}
</script>

<template>
  <div class="absolute z-10 w-full flex justify-end">
    <audio id="bgm" ref="bgm" :src="bgm01" loop :muted="muted"></audio>
    <button
      @click="bgmToggle"
      class="button px-4 py-2 uppercase text-gray-800 inline-flex items-center"
    >
      <span class="pr-2">BGM:</span>
      <img :src="volumeSlash" v-if="muted" />
      <img :src="volumeHigh" v-if="!muted" />
    </button>
  </div>
</template>