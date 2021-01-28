<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="6" md="6" lg="6">
        <v-text-field
          style="border-radius: 50px; margin-top: 60px"
          outlined
          @keypress="buscarCarros()"
          @keydown="buscarCarros()"
          v-model="busca"
          append-icon="mdi-magnify"
          placeholder="Pesquisar Carro"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col sx="4" sm="6" md="4" lg="3" v-for="(carro, id) in carros" :key="id">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="344" max-height="550" color="grey lighten-4">
              <v-img :src="carro.fotoPrincipal? carro.fotoPrincipal[0] : ''" height="300px"></v-img>
              <v-card-title>{{carro.marca}} - {{carro.nome}}</v-card-title>
              <v-card-subtitle style="margin-top: 3px">
                <h4>
                  <strong>R$ {{carro.preco}}</strong>
                </h4>
                <p>Motor: {{carro.motor}}</p>
                <p>Ano: {{carro.ano}}</p>
                <p>Câmbio: {{carro.cambio}}</p>
                <p>{{carro.km}} Km</p>
              </v-card-subtitle>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#000000">
                  <v-btn
                    @click="saiba_mais(id)"
                    elevation="10"
                    style="background-color: #d94b4b"
                  >Saiba mais</v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
      <v-dialog v-if="dialog" fullscreen v-model="dialog">
        <v-card>
          <v-toolbar dark color="black">
            <v-toolbar-title>{{carro.marca}} - {{carro.nome}}</v-toolbar-title>
            <v-spacer></v-spacer>
               <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          </v-toolbar>
          <v-carousel class="mt-4" style="width:1300px; margin: auto" :height="height" hide-delimiters>
            <v-carousel-item v-for="(foto, i) in carro.fotos" :key="i" :src="foto"></v-carousel-item>
          </v-carousel>
          <v-card-text class="pa-0">
            <v-container>
              <v-row style="margin-top: 10px">
                <v-col></v-col>
                <v-col cols="12">
                  <h1 class="center" style="color: black">R$ {{ carro.preco}}</h1>
                </v-col>
                <v-col cols="2"></v-col>
              </v-row>

                  <v-divider></v-divider>
              <v-row>
                <v-col>
                  <h3 class="my-1 center">Ano</h3>
                  <p class="my-1 center">{{ carro.ano }}</p>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col>
                  <h3 class="my-1 center">Portas</h3>
                  <p class="my-1 center">{{ carro.porta }}</p>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col>
                  <h3 class="my-1 center">Km</h3>
                  <p class="my-1 center">{{ carro.km }}</p>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col>
                  <h3 class="my-1 center">Potência do motor</h3>
                  <p class="my-1 center">{{ carro.motor }}</p>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col>
                  <h3 class="my-1 center">Combustivel</h3>
                  <p class="my-1 center">{{ carro.combustivel }}</p>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col>
                  <h3 class="my-1 center">Cor</h3>
                  <p class="my-1 center">{{ carro.cor }}</p>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col>
                  <h3 class="my-1 center">Final da Placa</h3>
                  <p class="my-1 center">{{ carro.finalPlaca }}</p>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col>
                  <h3 class="my-1 center">Câmbio do carro</h3>
                  <p class="my-1 center">{{ carro.cambio }}</p>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col>
                <h1 class="my-1">Observação</h1>
                <p class="my-1">{{carro.descricao}}</p>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row justify="center">
                <h2 class="mt-6 mb-6 mx-4" style="color: black">
                  Entre em contato conosco, ou venha conhecer nossa loja !
                </h2>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <p class="my-1 mt-6 ml-4"><strong>Endereço:</strong> Av.Jornalista Paulo Zingg, 1200 - Jaragua, São Paulo - SP</p>
              </v-row>
              <v-row>
                <p class="my-1 ml-4 mb-6">
                  <strong>Funcionamento:</strong> Segunda à Sexta 8h00 às 18h00 |
                  Sábados 8h00 às 14h00 | Domingos  Fechado
                </p>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col xs="12">
                  <p class="my-1 ml-lg-1"><strong>Contatos:</strong></p>
                </v-col>
              </v-row>
              <v-col xs="12" >
                <p class="ml-n2"><strong>Eduardo:</strong></p>
                  <v-btn
                    class="ml-n3"
                    href="https://api.whatsapp.com/send/?phone=5511989615120&text=Olá+tudo+bem?&app_absent=0"
                    color="green"
                    outlined
                  >
                    (11) 98961-5120
                    <v-icon class="ml-2" size="20px">mdi-whatsapp</v-icon>
                  </v-btn>
              </v-col>
              <v-col xs="12">
                <p class="ml-n2"><strong>Edmundo:</strong></p>
                  <v-btn
                  class="ml-n3"
                    href="https://api.whatsapp.com/send/?phone=5511947063029&text=Olá+tudo+bem?&app_absent=0"
                    color="green"
                    outlined
                  >
                   (11) 94706-3029
                    <v-icon class="ml-2" size="20px">mdi-whatsapp</v-icon>
                  </v-btn>
              </v-col>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" style="color: white" @click="dialog = false">Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  data: () => ({
    overlay: false,
    dialog: false,
    busca: "",
    carrosAux : []
  }),

  computed: {
    ...mapGetters({
      carros: "carros",
      carro: "carro"
    }),
     height (height) {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 250
          case 'sm': return 400
          case 'md': return 500
          case 'lg': return 730
          case 'xl': return 800
        }
        return height
      },
       width (width) {
        switch (this.$vuetify.breakpoint.width) {
          case 'xs': return 250
          case 'sm': return 400
          case 'md': return 500
          case 'lg': return 100
          case 'xl': return 800
        }
        return width
      },

  },

  methods: {

    buscarCarros() {
      if (this.busca == "" || this.busca == " ") {
         this.$store.state.carros = this.carrosAux
         return this.carros
      } else { 
       this.$store.state.carros = Object.values(this.carrosAux).filter(carro => {
         if(carro.nome !== undefined && carro.marca !== undefined)
            return carro.nome.match(this.busca) || carro.marca.match(this.busca)
        });
        return this.carros
      }
    },
    exibirCarro() {
      this.$http("carros.json").then(res => {
        this.$store.state.carros = res.data;
        this.carrosAux = res.data
      });
    },

    saiba_mais(id) {
      this.id = id;
      this.$store.state.carro = this.carros[id];
      this.dialog = true;

    },


  },

  created() {
    this.exibirCarro();
    console.log("Carros", this.$store.state.carros);
  }
};

</script>

<style></style>
