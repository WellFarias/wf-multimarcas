<template>
  <v-footer dark padless>
    <v-card flat tile class="indigo lighten-1 white--text text-center" style="width: 100%">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <v-row>
          <v-col cols="4">
            <p>
              <strong>Contatos</strong>
            </p>
            <p>fulano: 123456789</p>
            <p>Beltrano: 123456789</p>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="4">
            <p>
              <strong>Endereço</strong>
            </p>
            <p>Rua Raimundo Carneiro 123</p>
            <p>São João 123</p>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="4">
            <p>
              <strong>Funcionamento</strong>
            </p>
            <p>Segunda à Sexta | 9h00 às 18h00</p>
            <p>Sábados | 9h00 às 15h00</p>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — &copy; Todos os direitos reservados 
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>

<style>
</style>