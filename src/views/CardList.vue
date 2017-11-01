<template>
  <div class="card-list">
    <router-link v-for="(card, index) in cards" :key="card.id" :to="getCardURL(index)">
      <small-card :value="card.id"></small-card>
    </router-link>
  </div>
</template>

<script>
  import SmallCard from '../components/SmallCard.vue';
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
  }
</script>

<style>

.card-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
</style>
