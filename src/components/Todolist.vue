<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Login from './Login.vue';
const info = ref([]);
const newTodo = ref('');
let storedTodos;
localStorage.getItem('todos')
  ? (storedTodos = JSON.parse(localStorage.getItem('todos')))
  : (storedTodos = []);
const todos = ref(storedTodos);
function addTodo() {
  if (newTodo.value !== '') {
    todos.value.push({ complete: false, text: newTodo.value });
    newTodo.value = '';
  }
  axios.get('/api').then(function (response) {
    console.log(response);
    info.value = response.data;
  });
}
function removeAllTodos() {
  todos.value.splice(0, todos.value.length);
  updateStorage();
}
function completedTodo(todo) {
  todo.complete = !todo.complete;
  updateStorage();
}
function updateStorage() {
  localStorage.setItem('todos', JSON.stringify(todos.value));
}
</script>

<template>
  <div class="container mx-auto px-10 md:px-0">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <div class="mt-10">
          <h1 class="text-5xl font-semibold text-gray-600">Todo List</h1>
          <div class="mt-6">
            <form @submit.prevent="addTodo()">
              <div class="grid grid-cols-1 gap-4">
                <div>
                  <input
                    class="border-2 outline-none py-2 px-2 shadow-md font-medium w-full rounded border-blue-300 hover:border-blue-600 focus:border-blue-600 focus:shadow-blue-200"
                    v-model="newTodo"
                  />
                </div>
                <div>
                  <div class="grid grid-cols-2 gap-2">
                    <div>
                      <button
                        class="text-white py-2 px-4 shadow-md w-full rounded bg-red-400 hover:bg-red-600 font-semibold"
                        v-if="todos.length !== 0"
                        @click="removeAllTodos"
                      >
                        Remove All Todos
                      </button>
                    </div>
                    <div>
                      <button
                        class="text-white py-2 px-4 shadow-md w-full rounded bg-blue-400 hover:bg-blue-600 font-semibold"
                      >
                        Add Todo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="mt-8 text-center">
            <div class="grid grid-cols-1 gap-3">
              <div>
                <div v-if="todos.length === 0">
                  <Login />
                </div>
              </div>
              <div
                class="rounded shadow-md p-3 h-full hover:shadow-gray-400 text-gray-600 text-lg font-semibold"
                :class="{ completed: todo.complete }"
                v-for="(todo, index) in todos"
                :key="index"
                @click="completedTodo(todo)"
              >
                <span class="text-gray-600 text-lg font-semibold">{{
                  todo.text
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
