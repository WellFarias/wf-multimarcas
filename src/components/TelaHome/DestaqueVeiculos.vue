<template>
  <div style="background-color: #424242; display: flex; justify-content: space-arround">
    <v-container>
      <br />
      <h1 style="text-align: center; color: white; font-weight: 300">Veículos em Destaques</h1>
      <br />

      <v-row>
        <v-card class="mx-auto" max-width="344">
          <v-img src="/fiat-palio.jpg" height="200px"></v-img>

          <v-card-title>R$ 16.000,00</v-card-title>

          <v-card-subtitle>100.000km</v-card-subtitle>
          <v-card-subtitle>Fiat Palio - 2011</v-card-subtitle>

          <v-card-actions>
            <v-btn color="green lighten-2" text>Saiba Mais</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
        <v-spacer></v-spacer>

        <v-card class="mx-auto" max-width="344">
          <v-img src="/fusca.jpg" height="200px"></v-img>

          <v-card-title>R$ 1.000.000,00</v-card-title>

          <v-card-subtitle>0km</v-card-subtitle>
          <v-card-subtitle>Fuscão Preto - 1900</v-card-subtitle>

          <v-card-actions>
            <v-btn color="green lighten-2" text>Saiba Mais</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>

        <v-spacer></v-spacer>

        <v-card class="mx-auto" max-width="344">
          <v-img src="/golf.jpg" height="200px"></v-img>

          <v-card-title>R$ 25.000,00</v-card-title>

          <v-card-subtitle>100.000km</v-card-subtitle>
          <v-card-subtitle>Golf sportline - 2011</v-card-subtitle>

          <v-card-actions>
            <v-btn color="green lighten-2" text>Saiba Mais</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
