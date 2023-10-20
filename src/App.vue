<script setup>
// import HelloWorld from './components/HelloWorld.vue';
// import Login from './components/Login.vue';
// import Sighin from './components/Signin.vue';
import Todolist from './components/Todolist.vue';
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline text-center">TODO LIST</h1>
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <Todolist />
  <!-- <Login /> -->
  <!-- <Sighin /> -->
</template>

<style scoped></style>
