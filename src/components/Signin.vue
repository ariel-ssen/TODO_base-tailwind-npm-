<!-- <script setup>
import { ref } from 'vue';

const count = ref(0);

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  axios
    .post('https://reqres.in/api/login', {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response);
    });
});
</script>
<template>
  회원가입 구현
  <div id="app">
    <h1>Login Account</h1>
    <form action="">
      <label for="email">
        Email
        <input type="email" name="" id="email" />
      </label>
      <label for="password">
        Password
        <input type="password" name="" id="password" />
      </label>
      <button id="btn">Login</button>
    </form>
  </div>
</template>

<style scoped></style> -->
