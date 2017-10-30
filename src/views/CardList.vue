<template>
  <div class="card-list">
    <small-card v-for="(card, index) in cards" :key="card.id" :value="card.id" v-on:click.native="pickCard(index)"></small-card>
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
      pickCard: function(index) {
        this.$router.push({ path: `/card/${index}`}); // TODO: Replace with a link
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
