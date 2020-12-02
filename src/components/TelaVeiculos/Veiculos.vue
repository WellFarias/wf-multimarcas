<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Pesquisar" single-line hide-details></v-text-field>
    </v-row>
    <Cards />
  </v-container>
</template>

<script>
import Cards from "./Cards.vue";

export default {
  components: { Cards },
};
</script>

<style></style>
