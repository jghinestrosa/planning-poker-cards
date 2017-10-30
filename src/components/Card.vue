<template>
  <div class="card">
    <div class="card-wrapper" v-bind:class="{ backside: backside }" v-on:click="flip">
      <div class="side-wrapper">
        <front-card :value="value" :content-size="contentSize"></front-card>
        <div class="side back">
          <div class="back-pattern-wrapper">
            <div class="back-inner-pattern-wrapper">
            <div class="circle top-left"></div>
            <div class="circle top-right"></div>
            <div class="circle bottom-left"></div>
            <div class="circle bottom-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FrontCard from './FrontCard.vue';

  export default {
    components: {
      FrontCard
    },

    name: 'card',

    props: {
      value: String // TODO: Fix the value type here and SmallCard
    },

    data() {
      return {
        backside: false,
        contentSize: 5
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
    width: 17em;
    height: 24em;
    user-select: none;
    display: inline-block;
    transform-style: preserve-3d;
    transition-property: transform;
    transition-duration: 1s;
    border-radius: 0.5em;
    border: 1px solid #808080;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
  }

  .side-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .side {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 0.5em;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background: white;
  }

  .side.back {
    transform: rotateY(180deg) translateZ(1px);
    background: #ffffff;
  }

  .backside {
    transform: rotateY(-180deg);
  }

  .back-pattern-wrapper {
    width: 90%;
    height: 90%;
    border: 2px dotted #c33;
    border-radius: 0.3em;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }

  .back-pattern-wrapper .circle {
    width: 1em;
    height: 1em;
    display: inline-block;
    position: absolute;
    background: white;
  }

  .back-pattern-wrapper .circle:after {
    content: '';
    position: absolute;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background-color: #c33;
  }

  .back-pattern-wrapper .circle.top-left {
    top: -1px;
    left: -1px;
    border-bottom: 1px solid #c33;
    border-right: 1px solid #c33;
    border-bottom-right-radius: 1em;
  }

  .back-pattern-wrapper .circle.top-left:after {
    top: 0;
    left: 0;
  }

  .back-pattern-wrapper .circle.top-right {
    top: -1px;
    right: -1px;
    border-left: 1px solid #c33;
    border-bottom: 1px solid #c33;
    border-bottom-left-radius: 1em;
  }

  .back-pattern-wrapper .circle.top-right:after {
    top: 0;
    right: 0;
  }

  .back-pattern-wrapper .circle.bottom-left {
    bottom: -1px;
    left: -1px;
    border-right: 1px solid #c33;
    border-top: 1px solid #c33;
    border-top-right-radius: 1em;
  }

  .back-pattern-wrapper .circle.bottom-left:after {
    left: 0;
    bottom: 0;
  }

  .back-pattern-wrapper .circle.bottom-right {
    bottom: -1px;
    right: -1px;
    border-top: 1px solid #c33;
    border-left: 1px solid #c33;
    border-top-left-radius: 1em;
  }

  .back-pattern-wrapper .circle.bottom-right:after {
    right: 0;
    bottom: 0;
  }

  .back-inner-pattern-wrapper {
    position: absolute;
    width: 90%;
    height: 90%;
    border: 1px solid #c33;
    background: #f5d6d6;
    background: linear-gradient(135deg, rgba(255,255,255,.8) 25%, transparent 25%) 0 0, linear-gradient(225deg, rgba(255,255,255,.8) 25%, transparent 25%), linear-gradient(45deg, rgba(255,255,255,.8) 25%, transparent 25%), linear-gradient(315deg, rgba(255,255,255,.8) 25%, transparent 25%), #c33;
    background-size: 12px 12px;
  }
</style>
