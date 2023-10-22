<script setup>
import { ref } from 'vue';
import axios from 'axios';

const info = ref([]);
const newTodo = ref('');

axios.get('/api').then(function (response) {
  console.log(response);
  info.value = response.data;
});

function addTodo() {
  axios
    .post('/api', {
      content: newTodo.value,
    })
    .then(function (response) {
      console.log('POST 요청 성공', response);
    })

    .catch(function (error) {
      console.error('POST 요청 실패', error);
    });
}

// axios post code.
// axios
//   .post('/api', {
//     content: '한글',
//   })
//   .then(function (response) {
//     console.log('what is true', response);
//   })
//   .catch(function (error) {
//     console.log('what is False', error);
//   });
</script>

<template>
  <div id="app">
    <form @submit.prevent="addTodo()">
      <div class="grid grid-cols-1 gap-4">
        <div>
          <input
            class="border-2 outline-none py-2 px-2 shadow-md font-medium w-full rounded border-blue-300 hover:border-blue-600 focus:border-blue-600 focus:shadow-blue-200"
            v-model="newTodo"
            type="text"
          />
        </div>
        <div>
          <button
            type="submit"
            class="text-white py-2 px-4 shadow-md w-full rounded bg-blue-400 hover:bg-blue-600 font-semibold"
          >
            Add Todo
          </button>
        </div>
        <div
          class="rounded shadow-md p-3 h-full hover:shadow-gray-400 text-gray-600 text-lg font-semibold"
          v-for="(item, index) in info"
          :key="index"
        >
          {{ item.content }}
        </div>
      </div>
    </form>
  </div>
</template>
