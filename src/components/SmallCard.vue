<template>
  <div class="small-card">
    <front-card :value="value" :content-size="contentSize"></front-card>
  </div>
</template>

<script>
  import FrontCard from './FrontCard.vue';

  export default {
    components: {
      FrontCard
    },

    name: 'small-card',

    props: {
      value: String
    },

    data() {
      return {
        contentSize: 3
      };
    }
  }
</script>

<style>
  .small-card {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
    margin: 0.5em;
    border-radius: 0.5em;
    transition-property: transform;
    transition-duration: 0.1s;
    border: 1px solid #808080;
    width: 10em;
    height: 14em;
    background: #fff;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .small-card:hover {
    transform: scale(1.02);
  }

</style>
