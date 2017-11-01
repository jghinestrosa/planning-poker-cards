<template>
  <div class="card">
    <div class="card-wrapper" v-bind:class="{ backside: backside }" v-on:click="flip" v-on:touchmove.prevent>
      <div class="side-wrapper">
        <front-card :value="value" :content-size="contentSize"></front-card>
        <back-card></back-card>
      </div>
    </div>
  </div>
</template>

<script>
  import FrontCard from './FrontCard.vue';
  import BackCard from './BackCard.vue';

  export default {
    components: {
      FrontCard,
      BackCard
    },

    name: 'card',

    props: {
      value: String // TODO: Fix the value type here and SmallCard
    },

    data() {
      return {
        backside: false,

        // TODO: In Chrome for Android, 4.2em is max font-size
        // to render a emoji. Choose a font to be the same
        // in all platforms to be consistent
        contentSize: 4.2 
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
    display: inline-block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .card-wrapper {
    width: 17em;
    height: 24em;
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


</style>
