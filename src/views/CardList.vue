<template>
  <div class="card-list">
    <router-link v-for="(card, index) in cards" :key="index" :to="getCardURL(index)">
      <small-card :value="card.value"></small-card>
    </router-link>
  </div>
</template>

<script>
import SmallCard from '../components/SmallCard';

export default {
  components: {
    SmallCard
  },
  props: {
    cards: Array
  },
  methods: {
    getCardURL: function(index) {
      return `/card/${index}`;
    }
  }
};
</script>

<style>

.card-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
</style>
