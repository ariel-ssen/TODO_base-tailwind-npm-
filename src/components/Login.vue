<script setup>
import { ref } from 'vue';
import axios from 'axios';

const info = ref([]);

function getinfo() {
  axios.get('/api').then(function (response) {
    console.log(response);
    info.value = response.data;
  });
}
</script>

<template>
  <button @click="getinfo">ALL TODO SHOW</button>
  <!-- <MyButton @click="onClick" /> -->
  <div
    class="rounded shadow-md p-3 h-full hover:shadow-gray-400 text-gray-600 text-lg font-semibold"
    v-for="(item, index) in info"
    :key="index"
  >
    {{ item.content }}
  </div>
</template>
