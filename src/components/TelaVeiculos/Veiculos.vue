<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Pesquisar"
        single-line
        hide-details
      ></v-text-field>
    </v-row>

    <v-container>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            style="background-color: #cbcbcb"
            elevation="5"
            class="mx-auto"
            max-width="270"
          >
            <v-img
              src="https://www.giacomelliveiculos.com.br/carros/f9eba97a7e0af4ec5beb10a3d448ed7e-thumbjpg-chevrolet-celta-8371359-800-600-70.jpg"
              height="200px"
            ></v-img>

            <v-card-title> Celta </v-card-title>

            <v-card-subtitle>
              1.0 MPFI LIFE 8V FLEX 2P
              <br />
              MANUAL
              <br />
              2008/2009
              <br />
              3000 KM
            </v-card-subtitle>
            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#7D7D7D">
                <v-btn elevation="10" color="#D94B4B">Saiba mais</v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    overlay: false
  }),
};
</script>

<style>
</style>