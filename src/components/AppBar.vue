<template>
  <v-app-bar
    style="height: 70px"
    color="#000000"
    :hide-on-scroll="$vuetify.breakpoint.smAndDown"
    v-scroll="onScroll"
    app
    dark
    elevate-on-scroll
  >
      <img src="/wf-logo.png" alt="" style="width: 200px" />
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
