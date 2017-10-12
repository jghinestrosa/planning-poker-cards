<template>
  <div class="small-card">
    <div class="small-card-wrapper">
      <span class="small-card-number">{{ value }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'small-card',

    props: {
      value: Number
    },

    data() {
      return {};
    }
  }
</script>

<style>
  .small-card {
    display: inline-block;
  }

  .small-card-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 10em;
    height: 15em;
    user-select: none;
    border-radius: 0.5em;
    border: 1px solid black;
    background: white;
    margin: 0.5em;
  }

  .small-card-number {
    font-size: 2em;
  }
</style>
