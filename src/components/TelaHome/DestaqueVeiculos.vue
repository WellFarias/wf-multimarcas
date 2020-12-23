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
        <v-col xs="3" sx="4" sm="6" md="4" lg="12">
          <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="(carro, i) in carros"
              :key="i"
              :src="carro.fotos? carro.fotos[0] : ''"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
        <v-btn elevation="6" large x-large @click="veiculos" style="border-radius: 50px; outline: none">Saiba mais</v-btn>
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