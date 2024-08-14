<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <input id="email" type="email" v-model="email" placeholder="Email" required />
        <p>eve.holt@reqres.in</p>
      </div>
      <div id="password-form">
        <input id="password" type="password" v-model="password" placeholder="Password" required />
        <p>cityslicka</p>
        <button type="submit">Login</button>
      </div>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('https://reqres.in/api/login', {
          email: this.email,
          password: this.password,
        });

        console.log('Login Successful', response);
        if (response.status === 200) {
          cookies.set('token', response.data.token)
          this.$router.push('/game')
        }

      } catch (error) {
        console.log(error);
        alert('Login failed. Please check your credentials.');
      }
    },
  },
};
</script>

<style scoped>
input {
  width: 10rem;
  height: 1.5rem;
  font-size: 1.2rem;
  padding: 2px;
  background-color: #f3f3f3;
  border-radius: 5px;
}
</style>
