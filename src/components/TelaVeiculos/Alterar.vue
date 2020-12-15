<template>
  <v-app>
      <v-container>
        <br />
        <h1 style="text-align: center; color: black; font-weight: 300">
          Veículos cadastrados
        </h1>
        <v-row style="margin-left: 900px" align="center" justify="right">
          <v-col>
            <v-dialog
                v-model="dialog"
                width="800"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                  + Cadastrar Veiculo
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline grey lighten-2">
                  Cadastro de Veiculo
                </v-card-title>
                <tela-cadastro></tela-cadastro>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
        <br />
        <v-row>
          <v-col v-for="(carro, index) in carros" :key="index" >
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                    style="background-color: #cbcbcb"
                    elevation="1"
                    class="mx-auto"
                    max-width="270"
                >
                  <v-img
                      :src="carro.foto"
                      height="200px"
                  ></v-img>

                  <v-card-title> {{carro.titulo}} </v-card-title>

                  <v-card-subtitle>
                    <strong> {{carro.preco}} </strong>
                    <br />
                    {{carro.nome}}
                    <br />
                    {{ carro.ano }}
                    <br />
                    {{ carro.cambio }}
                    <br />
                    {{ carro.combustivel }}
                  </v-card-subtitle>
                  <v-fade-transition>
                    <v-overlay v-if="hover" absolute color="#000000">
                      <v-row>
                        <v-col>
                          <b-button
                              @click="alterar(index)"
                              style="background-color: #4878e6"
                          >Alterar</b-button
                          >
                        </v-col>
                        <v-col>
                          <b-button
                              v-b-modal
                              elevation="10"
                              style="background-color: #d94b4b"
                              @click="modalShow = !modalShow"
                          >Excluir</b-button
                          >
                        </v-col>
                      </v-row>
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>

        <b-modal
            ok-title="Excluir"
            ok-variant="danger"
            cancel-title="Cancelar"
            v-model="modalShow"
        ><h3>Tem certeza que deseja excluir o veículo?</h3>
        </b-modal>

        <b-modal
            v-if="dialogAlteracao"
            v-model="dialogAlteracao"
            ok-title="Alterar"
            ok-variant="primary"
            cancel-title="Cancelar"
            width="800"
            title="Alterar veículo"
            color="white"
        >
          <v-row style="margin-top: 20px" >
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
                <v-text-field v-model="carros[index].preco"></v-text-field>
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
                <v-text-field v-model="carros[index].marca"></v-text-field>
              </p>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
              <h6 class="my-1">Câmbio do carro</h6>
              <p class="my-1 center">
                <v-text-field v-model="carros[index].cambio"></v-text-field>
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
                <v-text-field v-model="carros[index].portas"></v-text-field>
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
                <v-text-field v-model="carros[index].potencia"></v-text-field>
              </p>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
              <h6 class="my-1">Combustivel</h6>
              <p class="my-1 center">
                <v-text-field v-model="carros[index].combustivel"></v-text-field>
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
        </b-modal>
      </v-container>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'
import TelaCadastro from '../TelaCadastro/Cadastro'

export default {
  data() {
    return {
      dialogAlteracao: false,
      dialog: false,
      modalShow: false,
      index: -1,
    };
  },
  computed:{
    ...mapGetters({
      carros: "carros"
    })
  },

  components:{
    TelaCadastro
  },
  methods:{
    alterar(index){
      this.index = index
      console.log(this.carros[this.index])
      this.carro = this.carros[index]
      console.log("CARRO: ", this.carro)
      console.log(this.index)
      this.dialogAlteracao = true
    }
  }
};
</script>

<style></style>
