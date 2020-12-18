<template>
  <v-container fluid>
    <v-row>
        <v-col sx="4" sm="6" md="4" lg="3"  v-for="(carro, id) in this.carros" :key="id" >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="344" max-height="550" color="grey lighten-4">
              <v-img
              :src="carro.fotos? carro.fotos[0] : ''"
                height="300px"
              ></v-img>
              <v-card-title>{{carro.marca}} - {{carro.nome}}</v-card-title>
                <v-card-subtitle style="margin-top: 3px">
                  <h6><strong>R$ {{carro.preco}}</strong></h6>
                      <p>Motor: {{carro.motor}}</p>
                      <p>Ano: {{carro.ano}}</p>
                      <p>Câmbio: {{carro.cambio}}</p>
                      <p>{{carro.km}} Km</p>
                </v-card-subtitle>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#000000">
                  <v-btn
                    @click="cadastrarCarro(id)"
                    elevation="10"
                    style="background-color: #d94b4b"
                    >Saiba mais</v-btn
                  >
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
          </v-col>
          <v-dialog  v-if="dialog" v-model="dialog" max-width="600px">
            <v-card>
              <v-card-title>
                <h4>{{carro.marca}} - {{ carro.nome }}</h4>
              </v-card-title>
              <v-carousel hide-delimiters>
                <v-carousel-item
                  v-for="(foto, i) in carro.fotos"
                  :key="i"
                  :src="foto"
                ></v-carousel-item>
              </v-carousel>
              <v-card-text>
                <v-container>
                  <v-row style="margin-top: 10px">
                    <v-col cols="2"> </v-col>
                    <v-col cols="8">
                      <h1 class="center" style="color: black">R${{ carro.preco }}</h1>
                    </v-col>
                    <v-col cols="2"> </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <h6 class="my-1 center">Ano</h6>
                      <p class="my-1 center">{{ carro.ano }}</p>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col>
                      <h6 class="my-1 center">Portas</h6>
                      <p class="my-1 center">{{ carro.porta }}</p>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col>
                      <h6 class="my-1 center">Km</h6>
                      <p class="my-1 center">{{ carro.km }}</p>
                    </v-col>
                  </v-row>
                  <v-divider inset></v-divider>
                  <v-row>
                    <v-col>
                      <h6 class="my-1 center">Potência do motor</h6>
                      <p class="my-1 center">{{ carro.motor }}</p>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col>
                      <h6 class="my-1 center">Combustivel</h6>
                      <p class="my-1 center">{{ carro.combustivel }}</p>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col>
                      <h6 class="my-1 center">Cor</h6>
                      <p class="my-1 center">{{ carro.cor }}</p>
                    </v-col>
                  </v-row>
                  <v-divider inset></v-divider>
                  <v-row>
                    <v-col>
                      <h6 class="my-1 center">Câmbio do carro</h6>
                      <p class="my-1 center">{{ carro.cambio }}</p>
                    </v-col>
                    <v-divider vertical></v-divider>
                  </v-row>
                  <v-divider inset></v-divider>
                  <v-row>
                    <h4 class="center" style="color: black">
                      Entre em contato com a gente ou vá até a loja, para fazer
                      o finânciamento!
                    </h4>
                  </v-row>
                  <v-divider inset></v-divider>
                  <v-row>
                    <p class="my-1">
                      Endereço: Rua Raimundo Carneiro 123
                    </p>
                  </v-row>
                  <v-row>
                    <p class="my-1">
                      Funcionamento: Segunda à Sexta | 9h00 às 18h00 e aos
                      Sábados | 9h00 às 15h00
                    </p>
                  </v-row>
                  <v-divider inset></v-divider>
                  <v-row>
                    <v-col cols="3">
                      <p class="my-1">Contatos:</p>
                    </v-col>
                    <v-col>
                      <p class="my-1">Fulao (11)945824785</p>
                      <p class="my-1">Roberto (11)40028922</p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red" style="color: white" large @click="dialog = false">
                  Ok
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
      </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data: () => ({
    overlay: false,
    dialog: false,
    id: null,
  }),
  computed:{
   ...mapGetters({
      carros: "carros",
    }),
  },

  methods: {
     
      exibirCarro(){
        this.$http('carros.json').then(res => {
          return this.$store.state.carros = res.data
        })
      },

    cadastrarCarro(id){
      this.id = id
      //console.log(this.carros[this.id])
      this.carro = this.carros[id]
     // console.log("CARRO: ", this.carro)
      //console.log(this.id)
      this.dialog = true
    },
   

  },
  created(){
    this.exibirCarro();

  }
 
};
</script>

<style></style>
