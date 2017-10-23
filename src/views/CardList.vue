<template>
  <div class="card-list">
    <small-card v-for="card in cards" :key="card.id" :value="card.id" v-on:click.native="pickCard(card.id)"></small-card>
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
      pickCard: function(cardId) {
        this.$router.push({ path: `/card/${cardId}`});
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
