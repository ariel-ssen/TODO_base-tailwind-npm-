<script setup>
import { ref } from 'vue';
import axios from 'axios';

const info = ref([]);

// function getinfo() {
//   axios.get('/api').then(function (response) {
//     console.log(response);
//     info.value = response.data;
//   });
// }
// axios.get('/api').then(function (response) {
//   console.log(response);
//   info.value = response.data;
// });
</script>

<template>
  <!-- <button @click="getinfo">ALL TODO SHOW</button> -->
  <!-- <MyButton @click="onClick" /> -->
  <div
    class="rounded shadow-md p-3 h-full hover:shadow-gray-400 text-gray-600 text-lg font-semibold"
    v-for="(item, index) in info"
    :key="index"
  >
    {{ item.content }}
  </div>
</template>

<!-- // Axios를 사용하여 데이터 가져오기 onMounted(() => { axios.get(apiUrl)
.then(function (response) { // API로부터 데이터 가져온 후, ToDo 목록(todos)에
추가 todos.value.push({ complete: false, text: response.data }); })
.catch(function (error) { console.error('데이터 가져오기 실패: ', error); });
}); -->
