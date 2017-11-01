<template>
  <div id="container">
    <carousel :perPage="1" :paginationEnabled="false" ref="carousel">
      <slide v-for="card in cards">
        <div class="slide-card-wrapper">
          <card :value="card.value" class="card-detail-item"></card>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
  import Card from '../components/Card.vue';
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    components: {
      Card,
      Carousel,
      Slide
    },

    props: ['index', 'cards'],

    data: function() {
      return {
        currentCardIndex: this.index,
        cardList: this.cards
      };
    },

    mounted: function() {
      // Hack to start with the correct slide
      for (let i = 0; i < this.currentCardIndex; i++) {
        this.$refs.carousel.advancePage();
      }
    },

    computed: {
      currentCard: function() {
        return this.cardList[this.currentCardIndex];
      }
    }
  }
</script>

<style>

  #container {
    /* TODO: Try to find a better way to center vertically */
    position: relative;
    top: 15%;
  }

  .slide-card-wrapper {
    text-align: center;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
  }

  .card-detail-item {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  .card-detail-item:hover {
    cursor: pointer;
  }

</style>
