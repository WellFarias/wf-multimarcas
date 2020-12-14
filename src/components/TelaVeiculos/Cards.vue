<template>
  <v-container>
    <v-row>
      <v-col>
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card
              style="background-color: #cbcbcb"
              elevation="1"
              class="mx-auto"
              max-width="270"
            >
              <v-img
                src="https://localizeisitestorage.blob.core.windows.net/anuncio/375074_GGK-9070_03.jpg"
                height="200px"
              ></v-img>

              <v-card-title> teste </v-card-title>

              <v-card-subtitle>
                <strong> R$ 2313,2 </strong>
                <br />
                1.0
                <br />
                Automatico
                <br />
                2020
                <br />
                20.000 km
              </v-card-subtitle>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#000000">
                  <v-btn
                    @click="dialog = true"
                    elevation="10"
                    style="background-color: #d94b4b"
                    >Saiba mais</v-btn
                  >
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
        <v-dialog
          v-model="dialog"
        >
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide
              img-src="https://www.giacomelliveiculos.com.br/carros/f9eba97a7e0af4ec5beb10a3d448ed7e-thumbjpg-chevrolet-celta-8371359-800-600-70.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://img.clasf.com.br/2019/07/24/Chevrolet-Celta-Spirit-Lt-1-0-Mpfi-8v-Flexp-5p-20190724202628.8521980015.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://www.giacomelliveiculos.com.br/carros/556959e50b7088c510b60e065990225e-thumbjpg-chevrolet-celta-8371359-1000-750-70.jpg"
            ></b-carousel-slide>
          </b-carousel>
          <v-row style="margin-top: 10px">
            <v-col cols="2"> </v-col>
            <v-col cols="8">
              <h1 class="center">R$20.000,00</h1>
            </v-col>
            <v-col cols="2"> </v-col>
          </v-row>

          <v-row>
            <v-col>
              <h6 class="my-1 center">Ano</h6>
              <p class="my-1 center">2020</p>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
              <h6 class="my-1 center">Portas</h6>
              <p class="my-1 center">3</p>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
              <h6 class="my-1 center">Km</h6>
              <p class="my-1 center">20.000</p>
            </v-col>
          </v-row>
          <v-divider inset></v-divider>
          <v-row>
              <v-col>
              <h6 class="my-1 center">Potência do motor</h6>
              <p class="my-1 center">1.0</p>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
              <h6 class="my-1 center">Combustivel</h6>
              <p class="my-1 center">flex</p>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
              <h6 class="my-1 center">Cor</h6>
              <p class="my-1 center">Amarelo</p>
            </v-col>
          </v-row>
          <v-divider inset></v-divider>
          <v-row>
            <v-col>
              <h6 class="my-1 center">Câmbio do carro</h6>
              <p class="my-1 center">Automatico</p>
            </v-col>
            <v-divider vertical></v-divider>
          </v-row>
          <v-divider inset></v-divider>
          <v-row>
            <h4 class="center">
              Entre em contato com a gente ou vá até a loja, para fazer o
              finânciamento!
            </h4>
          </v-row>
          <v-divider inset></v-divider>
          <v-row>
            <p class="my-1" style="margin: 5%">
              Endereço: Rua Raimundo Carneiro 123
            </p>
          </v-row>
          <v-row>
            <p class="my-1" style="margin: 5%">
              Funcionamento: Segunda à Sexta | 9h00 às 18h00 e aos Sábados |
              9h00 às 15h00
            </p>
          </v-row>
          <v-divider inset></v-divider>
          <v-row>
            <v-col cols="2">
              <p class="my-1" style="margin: 20%">Contatos:</p>
            </v-col>
            <v-col>
              <p class="my-1">Fulao (11)945824785</p>
              <p class="my-1">Roberto (11)40028922</p>
            </v-col>
          </v-row>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data: () => ({
    overlay: false,
    dialog: false,
  }),
  computed:{
    ...mapGetters({
      carros: "carros"
    })
  },

  methods: {

  }
};
</script>

<style></style>
