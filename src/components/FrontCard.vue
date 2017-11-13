<template>
  <div class="front-card">
    <div class="front-card-content">
      <span class="front-card-corner-top-left">{{ value }}</span>
      <span :style="{ fontSize: contentSize + 'em' }">{{ value }}</span>
      <span class="front-card-corner-bottom-right">{{ value }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'front-card',

    props: {
      value: String,
      contentSize: Number
    },

    data() {
      return {};
    }
  }
</script>

<style>

  .front-card, .front-card-content {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-radius: 0.5em;
    color: #000;
  }

  .front-card {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .front-card-content {
    border: 1px solid #c33;
    width: 85%;
    height: 90%;
    position: relative;
  }

  .front-card-corner-top-left, .front-card-corner-bottom-right {
    position: absolute;
    display: inline-block;
    padding: 0.5em;
  }

  .front-card-corner-top-left {
    top: 0;
    left: 0;
  }

  .front-card-corner-bottom-right {
    bottom: 0;
    right: 0;
  }

</style>
