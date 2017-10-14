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
    box-shadow: 0px 0px 2px #000000;
    margin: 0.5em;
    border-radius: 0.5em;
    transition-property: transform;
    transition-duration: 0.1s;
  }

  .small-card:hover {
    cursor: pointer;
    transform: scale(1.02);
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
    background: #fff;
  }

  .small-card-number {
    font-size: 2em;
  }
</style>
