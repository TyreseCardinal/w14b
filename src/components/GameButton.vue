<template>
  <main>
    <button @click="playGame">Play</button>
  </main>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';

export default {
  data() {
    return {
      winCount: 0,
      lossCount: 0,
    };
  },
  created() {
    this.winCount = parseInt(cookies.get('winCount')) || 0;
    this.lossCount = parseInt(cookies.get('lossCount')) || 0;
  },
  methods: {
    async playGame() {
      try {
        // Corrected URL
        const response = await axios.get('https://www.randomnumberapi.com/api/v1.0/random?min=1&max=100&count=1');

        // Access the number from the response data
        const number = response.data[0];

        if (number >= 50) {
          this.winCount++;
          alert('You Win :D');
        } else {
          this.lossCount++;
          alert('You Lose :(');
        }

        // Update cookies with the current win/loss count
        cookies.set('winCount', this.winCount);
        cookies.set('lossCount', this.lossCount);
      }
      catch (error) {
        console.error('Error fetching random number:', error);
      }
    }
  }
};
</script>
