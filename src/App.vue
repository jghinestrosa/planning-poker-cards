<template>
  <div id="app">
    <card :value="1"></card>
  </div>
</template>

<script>
  import Card from './components/Card.vue';
  export default {
    components: {
      Card
    }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
</style>
