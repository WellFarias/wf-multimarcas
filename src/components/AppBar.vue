<template>
  <v-app-bar
  width="100%"
    style="height: 60px"
    color="#000000"
    :hide-on-scroll="$vuetify.breakpoint.smAndDown"
    v-scroll="onScroll"
    app
    dark
    elevate-on-scroll
  >
      <img src="/wf-logo.png" alt="wf-multimarcas"  :width="width"/>
      <v-spacer></v-spacer>
        <v-btn
          @click="home"
          elevation="0"
          style="color: white; background-color: black; height: 100%"
          >Home</v-btn
        >
        <v-btn
          @click="veiculos"
          class="btns"
          elevation="0"
          style="color: white; background-color: black; height: 100%"
          >Veiculos</v-btn
        >
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    isScrolling: false,    
  }),
  computed: {
      width (width) {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 120
          case 'sm': return 170
          case 'md': return 200
          case 'lg': return 160
          case 'xl': return 210
        }
        return width
      },
  },

  methods: {
    veiculos() {
      this.$router.push("/veiculos");
    },

    home() {
      this.$router.push("/");
    },
    onScroll() {
      this.isScrolling =
        (window.pageYOffset || document.documentElement.scrollTop || 0) > 25;
    },
  },
};
</script>

<style></style>
