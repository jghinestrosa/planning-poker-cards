<template>
  <div class="card">
    <div class="card-wrapper" v-bind:class="{ backside: backside }" v-on:click="flip">
      <div class="side-wrapper">
        <div class="side front">
          <span class="number">{{ value }}</span>
        </div>
        <div class="side back"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card',

    props: {
      value: Number
    },

    data() {
      return {
        backside: false
      };
    },

    methods: {
      showUpside: function() {
        this.backside = false;
      },
      showBackside: function() {
        this.backside = true;
      },
      flip: function(event) {
        if (this.backside) {
          this.showUpside();
        }
        else {
          this.showBackside();
        }
      }
    }
  }
</script>

<style>
  .card {
    perspective: 1000px;
  }
  .card-wrapper {
    width: 15em;
    height: 20em;
    user-select: none;
    display: inline-block;
    transform-style: preserve-3d;
    transition-property: transform;
    transition-duration: 1s;
  }

  .side-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .side.front, .side.back {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 0.5em;
    border: 1px solid black;
  }

  .side.front {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background: white;
  }

  .side.back {
    background: lightgray;
    transform: translateZ(-1px);
  }

  .number {
    font-size: 5em;
  }

  .backside {
    transform: rotateY(-180deg);
  }
</style>
