<template>
  <v-app>
    <v-container fluid>
      <br />
      <h1 style="text-align: center; color: black; font-weight: 300">Veículos cadastrados</h1>
      <v-row align="end" justify="end">
        <v-col cols="2">
          <TelaCadastro></TelaCadastro>
        </v-col>
      </v-row>
     
      <v-row>
        <v-col v-for="(carro, id) in this.carros" :key="id">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card class="mx-auto" max-width="344" max-height="550" color="grey lighten-4">
                <v-img
                  src="https://img.clasf.com.br/2019/07/24/Chevrolet-Celta-Spirit-Lt-1-0-Mpfi-8v-Flexp-5p-20190724202628.8521980015.jpg"
                  height="300px"
                ></v-img>

                <v-card-title>{{carro.marca}} - {{carro.nome}}</v-card-title>

                <v-card-subtitle style="margin-top: 10px">
                  <h6><strong>R$ {{carro.preco}}</strong></h6>

                      <p>Motor: {{carro.motor}}</p>
                      <p>Ano: {{carro.ano}}</p>
                      <p>Câmbio: {{carro.cambio}}</p>
                      <p>{{carro.km}} Km</p>
                </v-card-subtitle>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#000000">
                    <v-btn elevation="10" color="secondary"  @click="deleteCarro(id)">Excluir</v-btn>
                    <v-btn class="ml-2" color="blue" @click="alterar(id), atualizarCarro(id)">Editar</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
     <v-row justify="center">
        <v-dialog
          v-if="dialogAlteracao"
          v-model="dialogAlteracao"
          max-width="600px"
        >
          <v-card>
            <v-card-title>
              <h4 style="margin-top: 20px">Editar veículo</h4>
            </v-card-title>
            <hr>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="2"> </v-col>
                  <v-col>
                    <h4 class="left">Nome</h4>
                    <p class="my-1 center">
                      <v-text-field v-model="carros[index].nome"></v-text-field>
                    </p>
                  </v-col>

                  <v-col cols="2"> </v-col>
                </v-row>
                <v-divider inset></v-divider>
                <v-row>
                  <v-col cols="6">
                    <h6 class="my-1">Preço</h6>
                    <p class="my-1 center">
                      <v-text-field
                        v-model="carros[index].preco"
                      ></v-text-field>
                    </p>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col cols="5">
                    <h6 class="my-1">Nome</h6>
                    <p class="my-1 center">
                      <v-text-field v-model="carros[index].nome"></v-text-field>
                    </p>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col cols="6">
                    <h6 class="my-1">Marca</h6>
                    <p class="my-1 center">
                      <v-text-field
                        v-model="carros[index].marca"
                      ></v-text-field>
                    </p>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col>
                    <h6 class="my-1">Câmbio do carro</h6>
                    <p class="my-1 center">
                      <v-text-field
                        v-model="carros[index].cambio"
                      ></v-text-field>
                    </p>
                  </v-col>
                  <v-divider vertical></v-divider>
                </v-row>
                <v-divider inset></v-divider>
                <v-row>
                  <v-col>
                    <h6 class="my-1">Ano</h6>
                    <p class="my-1 center">
                      <v-text-field v-model="carros[index].ano"></v-text-field>
                    </p>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col>
                    <h6 class="my-1">Portas</h6>
                    <p class="my-1 center">
                      <v-text-field
                        v-model="carros[index].portas"
                      ></v-text-field>
                    </p>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col>
                    <h6 class="my-1">Km</h6>
                    <p class="my-1 center">
                      <v-text-field v-model="carros[index].km"></v-text-field>
                    </p>
                  </v-col>
                </v-row>
                <v-divider inset></v-divider>
                <v-row>
                  <v-col>
                    <h6 class="my-1">Potência do motor</h6>
                    <p class="my-1 center">
                      <v-text-field
                        v-model="carros[index].potencia"
                      ></v-text-field>
                    </p>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col>
                    <h6 class="my-1">Combustivel</h6>
                    <p class="my-1 center">
                      <v-text-field
                        v-model="carros[index].combustivel"
                      ></v-text-field>
                    </p>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col>
                    <h6 class="my-1">Cor</h6>
                    <p class="my-1 center">
                      <v-text-field v-model="carros[index].cor"></v-text-field>
                    </p>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="grey" style="color: white" large> Cancelar </v-btn>
              <v-btn
                color="red"
                style="color: white"
                large
                @click="salvarCarro()"
              >
                Alterar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <br />
      <v-btn @click="exibirCarro">teste</v-btn>
    </v-container>
  </v-app>
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
      id: null
    };
  },
  computed: {
    ...mapGetters({
      carros: "carros"
    })
  },

  components: {
    TelaCadastro
  },
  methods: {
    alterar(index) {
      this.index = index;
      console.log(this.carros[this.index]);
      this.carro = this.carros[index];
      console.log("CARRO: ", this.carro);
      console.log(this.index);
      this.dialogAlteracao = true;
    },

    exibirCarro() {
      this.$http("carros.json").then(res => {
        return (this.$store.state.carros = res.data);
      });
    },

    deleteCarro(id) {
      this.$http.delete(`/carros/${id}.json`).then();
      console.log("carro removido", id);
    },

    atualizarCarro(id) {
      this.id = id
      this.carro = { ...this.carros[id] }
    },
    salvarCarro() {
      this.$http.put(`carros/${this.id}.json`, this.carro).then( () => {
        this.$store.state.carro;
        console.log('Carro atualizado', this.id)
      })
    },
  }
};
</script>

<style></style>
