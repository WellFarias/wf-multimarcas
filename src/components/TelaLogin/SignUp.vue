<template>
  <v-container>
    <v-row>
      <v-card
        width="600"
        style="background-color: #bbb9b9; margin: auto; margin-top: 50px"
      >
        <v-card-title>
          <v-row align="center" justify="center">
            <v-img src="/wf-logo.png" width="400" style="margin: auto"></v-img>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-text-field
            append-icon="mdi-account"
            label="Usuario"
            outlined
            autocomplete="off"
            type="email"
          />
          <v-text-field
            append-icon="mdi-lock"
            label="Senha"
            type="password"
            outlined
          />
        </v-card-text>
        <v-card-actions>
          <v-row align="center" justify="center" class="ml-1 mr-1">
            <v-btn dark rounded block height="50">Entrar</v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
</style>