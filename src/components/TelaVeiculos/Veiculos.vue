<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="6" md="6" lg="6">
      <v-text-field
        style="border-radius: 50px; margin-top: 20px"
        outlined
        append-icon="mdi-magnify"
        placeholder="Pesquisar Carro"
      ></v-text-field>
      </v-col>
    </v-row>
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
