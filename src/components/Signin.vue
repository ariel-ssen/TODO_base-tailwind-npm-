<script setup>
import { ref } from 'vue';
import axios from 'axios';

const info = ref([]);
const newTodo = ref('');
const apiUrl = '/api'; // POST 요청을 보낼 API 엔드포인트의 URL 설정

// Axios를 사용하여 GET 요청을 보내고 데이터를 info에 할당하는 부분은 유지합니다.
axios.get(apiUrl).then(function (response) {
  console.log(response);
  info.value = response.data;
});

// POST 요청을 보내는 함수를 정의합니다.
function sendPostRequest() {
  axios
    .post(apiUrl, {
      content: newTodo.value,
    })
    .then(function (response) {
      console.log('POST 요청 성공', response);
      // POST 요청이 성공하면 응답 데이터를 처리할 수 있습니다.
      // 예를 들어, info.value에 새로운 데이터를 추가할 수 있습니다.
      info.value.push(response.data);
      newTodo.value = ''; // 입력 필드 비우기
    })
    .catch(function (error) {
      console.error('POST 요청 실패', error);
    });
}
</script>

<template>
  <div id="app">
    <form @submit.prevent="sendPostRequest()">
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
            class="text-white py-2 px-4 shadow-md w-full rounded bg-blue-400 hover:bg-blue-600 font-semibold"
          >
            Add Todo
          </button>
        </div>
        <!-- info를 이용하여 서버로부터 받은 데이터를 표시합니다. -->
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
