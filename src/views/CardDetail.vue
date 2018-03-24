<template>
  <div id="container">
    <swipe ref="carousel">
      <swipe-item class="slide" v-for="card in cards" :key="card.value">
        <div class="slide-card-wrapper">
          <card :value="card.value" class="card-detail-item"></card>
        </div>
      </swipe-item>
    </swipe>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import { Carousel, Slide } from 'vue-carousel';
import { Swipe, SwipeItem } from 'vue-swipe';

const keys = {
  LEFT: 37,
  RIGHT: 39
};

export default {
  components: {
    Card
  },

  props: ['index', 'cards'],

  data: function() {
    return {
      currentCardIndex: this.index,
      cardList: this.cards
    };
  },

  created: function() {
    window.addEventListener('keyup', this.onKeyUp);
  },

  mounted: function() {
    this.$refs.carousel.slide(this.currentCardIndex, 0);
  },

  beforeDestroy: function() {
    window.removeEventListener('keyup', this.onKeyUp);
  },

  computed: {
    currentCard: function() {
      return this.cardList[this.currentCardIndex];
    }
  },

  methods: {
    onKeyUp: function(event) {
      if (event.which === keys.RIGHT) {
        this.showNextCard();
        return;
      }

      if (event.which === keys.LEFT) {
        this.showPreviousCard();
      }
    },

    showNextCard: function() {
      this.$refs.carousel.next();
    },

    showPreviousCard: function() {
      this.$refs.carousel.prev();
    }
  }
}
</script>

<style>

  .slide {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }


  .card-detail-item {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  .card-detail-item:hover {
    cursor: pointer;
  }

</style>
