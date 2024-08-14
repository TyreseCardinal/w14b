<template>
  <div>
    <h2>Scoreboard</h2>
    <p>Wins: {{ wins }}</p>
    <p>Losses: {{ losses }}</p>
  </div>
</template>

<script>
export default {
  props: ['wins', 'losses'],
};
</script>
