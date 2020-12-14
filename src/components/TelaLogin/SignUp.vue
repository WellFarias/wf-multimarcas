<template>
  <v-container>
    <v-row>
      <v-card
        width="400"
        height="500"
        style="margin: auto; margin-top: 50px"
      >
        <v-card-title>
          <v-row align="center" justify="center">
            <v-img src="/wf-logo.png" width="400" style="margin: auto"></v-img>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-text-field
            append-icon="mdi-account"
            outlined
            autocomplete="off"
            type="email"
            placeholder="Usuário"
            v-model="user.email"
          />
          <v-text-field
            append-icon="mdi-lock"
            placeholder="Senha"
            type="password"
            v-model="user.senha"
            outlined
          />
        </v-card-text>
        <v-card-actions>
          <v-row align="center" justify="center" class="ml-1 mr-1">
            <v-btn dark rounded block height="50" @click="login">Entrar</v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data(){
    return{
      user: {}
    }
  },
  methods:{
    ...mapMutations({
      setUser: 'setUser'
    }),

    login(){
      this.$firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.senha)
          .then((user) => {
            this.setUser(user)
            this.$router.push('/lista-carros')
          })
          .catch((error) => {
            console.log(error.message)
          });
    }
  }

};
</script>

<style scoped></style>
