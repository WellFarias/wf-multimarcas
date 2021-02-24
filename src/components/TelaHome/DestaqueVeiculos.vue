<template>
  <div
    style="
      background-color: #424242;
      display: flex;
      justify-content: space-arround;
    "
  >
    <v-container>
      <br />
      <h1 style="text-align: center; color: white; font-weight: 300">Veja nossos veículos em estoque</h1>
      <br />

      <v-row justify="center">
        <v-col xs="12" sm="12" md="12" lg="12">
          <v-carousel :height="height" hide-delimiters>
            <v-carousel-item
              v-for="(carro, i) in carros"
              :key="i"
              :src="carro.fotoPrincipal? carro.fotoPrincipal[0] : ''"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
        <v-btn :button="button" elevation="6" x-large @click="veiculos" style="border-radius: 50px; outline: none">Saiba mais</v-btn>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    overlay: false,
    dialog: false,
  }),
  computed: {
    ...mapGetters({
      carros: "carros",
    }),
     height (height) {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 250
          case 'sm': return 400
          case 'md': return 500
          case 'lg': return 700
          case 'xl': return 800
        }
        return height
      },
      button (button) {
        switch (this.$vuetify.breakpoint.button) {
          case 'xs': return 10
          case 'sm': return 400
          case 'md': return 500
          case 'lg': return 700
          case 'xl': return 800
        }
        return button
      },
  },

  methods: {
    exibirCarro() {
      this.$http("carros.json").then((res) => {
        return (this.$store.state.carros = res.data);
      });
    },

     veiculos() {
      this.$router.push("/veiculos");
  }
  },

  created() {
    this.exibirCarro();
  },
};
</script>

<style></style>
