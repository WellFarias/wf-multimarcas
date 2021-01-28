<template>
  <v-footer dark color="black">
    <v-card flat tile class="black white--text text-center" style="width: 100%">
      <v-card-text class="white--text mt-7 pt-0">
        <v-row>
          <v-col cols="12" sm="4" lg="4" >
            <p>
              <strong>Contatos</strong>
            </p>
            <p>
              Eduardo: (11) 98961-5120<v-btn class="mx-4 white--text" href="https://api.whatsapp.com/send/?phone=5511989615120&text=Olá+tudo+bem?&app_absent=0" icon>
                <v-icon size="24px">mdi-whatsapp</v-icon>
              </v-btn>
            </p>
            <p>
              Edmundo: (11) 94706-3029
              <v-btn class="mx-4 white--text" href="https://api.whatsapp.com/send/?phone=5511947063029&text=Olá+tudo+bem?&app_absent=0" icon>
                <v-icon size="24px">mdi-whatsapp</v-icon>
              </v-btn>
            </p>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="4" lg="4">
            <p>
              <strong>Endereço</strong>
            </p>
            <p>Av. Jornalista Paulo Zingg, 1218 - Jardim Jaragua, São Paulo - SP, 05157-030</p>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="4" lg="4">
            <p>
              <strong>Funcionamento</strong>
            </p>
            <p>Segunda à Sexta | 8h00 às 18h00</p>
            <p>Sábados | 8h00 às 14h00</p>
            <p>Domingos | Fechado</p>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy; {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  
};
</script>

<style>
</style>