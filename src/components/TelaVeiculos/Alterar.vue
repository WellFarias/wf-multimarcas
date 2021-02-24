<template>
  <v-container fluid>
    <h1 style="text-align: center; color: black; font-weight: 300">
      Veículos Cadastrados
    </h1>
    <v-row class="d-flex justify-end">
      <v-col cols="2">
        <TelaCadastro></TelaCadastro>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        sx="4"
        sm="6"
        md="4"
        lg="3"
        v-for="(carro, id) in this.carros"
        :key="id"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              max-width="344"
              max-height="550"
              color="grey lighten-4"
            >
              <v-img
                :src="carro.fotoPrincipal ? carro.fotoPrincipal[0] : ''"
                height="300px"
              ></v-img>

              <v-card-title>{{ carro.marca }} - {{ carro.nome }}</v-card-title>

              <v-card-subtitle style="margin-top: 10px">
                <h4>
                  <strong>R$ {{ carro.preco }}</strong>
                </h4>

                <p>Motor: {{ carro.motor }}</p>
                <p>Ano: {{ carro.ano }}</p>
                <p>Câmbio: {{ carro.cambio }}</p>
                <p>{{ carro.km }} Km</p>
              </v-card-subtitle>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#000000">
                  <v-btn elevation="10" color="secondary" @click="idCarro(id)"
                    >Excluir</v-btn
                  >
                  <v-btn class="ml-2" color="blue" @click="alterar(id)"
                    >Editar</v-btn
                  >
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-dialog
        persistent
        fullscreen
        v-if="dialogAlteracao"
        v-model="dialogAlteracao"
        max-width="600px"
      >
        <v-card>
          <v-toolbar color="black">
          <v-toolbar-title>
            <h4 style="color:white; font-weight:400">Editar veículo</h4>
          </v-toolbar-title>
            <v-spacer></v-spacer>
             <v-btn
            icon
            dark
            @click="dialogAlteracao = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          </v-toolbar>
          <v-carousel class="mt-4" style="width:1300px; margin: auto" :height="height" hide-delimiters>
            <v-carousel-item v-for="(foto, i) in carro.fotos" :key="i" :src="foto"></v-carousel-item>
          </v-carousel>
          <v-card-text class="pa-0">
            <v-container>
              <v-row>
                <v-col cols="6">
                   <h6 class="my-1">Marca</h6>
                  <p class="my-1 center">
                    <v-text-field outlined dense v-model="carros[index].marca"></v-text-field>
                  </p>
                </v-col>
                <v-col cols="6">
                  <h4 class="my-1">Nome</h4>
                  <p class="my-1 center">
                    <v-text-field outlined dense v-model="carros[index].nome"></v-text-field>
                  </p>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col cols="4">
                  <h6 class="my-1">Preço</h6>
                  <p class="my-1 center">
                    <v-text-field outlined dense v-model="carros[index].preco"></v-text-field>
                  </p>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="4">
                  <h6 class="my-1">Final da Placa</h6>
                  <p class="my-1 center">
                    <v-text-field outlined dense v-model="carros[index].finalPlaca"></v-text-field>
                  </p>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col>
                  <h6 class="my-1">Câmbio do carro</h6>
                  <p class="my-1 center">
                    <v-text-field outlined dense  v-model="carros[index].cambio"></v-text-field>
                  </p>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col>
                  <h6 class="my-1">Ano</h6>
                  <p class="my-1 center">
                    <v-text-field outlined dense v-model="carros[index].ano"></v-text-field>
                  </p>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col>
                  <h6 class="my-1">Portas</h6>
                  <p class="my-1 center">
                    <v-text-field outlined dense v-model="carros[index].porta"></v-text-field>
                  </p>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col>
                  <h6 class="my-1">Km</h6>
                  <p class="my-1 center">
                    <v-text-field outlined dense v-model="carros[index].km"></v-text-field>
                  </p>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col>
                  <h6 class="my-1">Potência do motor</h6>
                  <p class="my-1 center">
                    <v-text-field outlined dense v-model="carros[index].motor"></v-text-field>
                  </p>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col>
                  <h6 class="my-1">Combustivel</h6>
                  <p class="my-1 center">
                    <v-text-field outlined dense v-model="carros[index].combustivel"></v-text-field>
                  </p>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col>
                  <h6 class="my-1">Cor</h6>
                  <p class="my-1 center">
                    <v-text-field outlined dense v-model="carros[index].cor"></v-text-field>
                  </p>
                </v-col>
              </v-row>
                  <v-divider></v-divider>
                  <v-textarea outlined class="mt-4" name="input-7-4" label="Observações" v-model="carros[index].descricao"></v-textarea>

            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="grey"
              style="color: white"
              @click="dialogAlteracao = false, alertAlteracao = false"
              >Cancelar</v-btn
            >
            <v-btn color="red" style="color: white" @click="editarCarro()"
              >Salvar Edição</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <br />

    <div class="text-center">
      <v-bottom-sheet v-model="sheet">
        <v-sheet class="text-center" height="200px">
          <div class="py-3">
            <p class="mt-5">Tem certeza que deseja excluir este veículo ?</p>
          </div>
          <v-btn class="mt-6" text color="blue" @click="sheet = !sheet">
            Cancelar
          </v-btn>
          <v-btn class="mt-6" text color="red" @click="deleteCarro(id)">
            Excluir
          </v-btn>
        </v-sheet>
      </v-bottom-sheet>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import TelaCadastro from "../TelaCadastro/TelaCadastro";

export default {
  data() {
    return {
      dialogAlteracao: false,
      dialog: false,
      modalShow: false,
      index: -1,
      sheet: false,
      alertAlteracao: false,
    };
  },
  computed: {
    ...mapGetters({
      carros: "carros",
    }),
  },

  components: {
    TelaCadastro,
  },
  methods: {
    refresh() {
      window.location.reload();
    },

    alterar(index) {
      this.index = index;
      this.carro = this.carros[index];
      this.dialogAlteracao = true;
    },

    deleteCarro(id) {
      this.$http.delete(`/carros/${id}.json`).then(() => {
        // var desertRef = this.$firebase.storageRef.child(car.imagemPrincipal);
        // desertRef.delete().then(function() {
        //  console.log("arquivo deletado com sucesso.")
        // }).catch(function(error) {
        //   console.log("erro ao deletar arquivo: ", error)
        // });
        //
        // for(let img = 0; img < car.images.length; i++){
        //   const url = car.images[img]
        //   var desertRef = this.$firebase.storageRef.child(car.imagemPrincipal);
        this.refresh();

      });
    },

    editarCarro(updates) {
      this.$store.state.carro = this.$firebase.database().ref().child("carros");

      updates = {};
      updates[`carros/${this.index}/nome`] = this.carro.nome;
      updates[`carros/${this.index}/ano`] = this.carro.ano;
      updates[`carros/${this.index}/descricao`] = this.carro.descricao;
      updates[`carros/${this.index}/marca`] = this.carro.marca;
      updates[`carros/${this.index}/porta`] = this.carro.porta;
      updates[`carros/${this.index}/km`] = this.carro.km;
      updates[`carros/${this.index}/combustivel`] = this.carro.combustivel;
      updates[`carros/${this.index}/cor`] = this.carro.cor;
      updates[`carros/${this.index}/cambio`] = this.carro.cambio;
      updates[`carros/${this.index}/motor`] = this.carro.motor;
      updates[`carros/${this.index}/preco`] = this.carro.preco;

      this.alertAlteracao = true;

      this.$firebase.database().ref().update(updates)

      this.dialogAlteracao = false
    },
    idCarro(id) {
      this.id = id;
      this.carro = this.carros[id];
      this.sheet = true;
    },
  },

  created() {
    this.$http("carros.json").then((res) => {
      return (this.$store.state.carros = res.data);
    });
  },
};
</script>

<style></style>
