<template>
  <div id="container">
    <card :value="id"></card>
  </div>
</template>

<script>
  import Card from '../components/Card.vue';
  export default {
    components: {
      Card
    },
    props: ['id']
  }
</script>

<style>
#container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
</style>
