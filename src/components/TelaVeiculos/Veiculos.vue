<template>
  <v-container fluid>
    <Cards />
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import Cards from "./Cards.vue";

export default {
  components: { Cards },
  computed: {
    ...mapGetters({
      carro: 'carro',
      carros: 'carros'
    }),

  }
};
</script>

<style></style>
