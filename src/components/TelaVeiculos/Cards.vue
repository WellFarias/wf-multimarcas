<template>
  <v-container>
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card style="background-color: #cbcbcb" elevation="1" class="mx-auto" max-width="270">
          <v-img src="https://www.giacomelliveiculos.com.br/carros/f9eba97a7e0af4ec5beb10a3d448ed7e-thumbjpg-chevrolet-celta-8371359-800-600-70.jpg" height="200px"></v-img>

          <v-card-title> Celta </v-card-title>

          <v-card-subtitle>
            1.0 MPFI LIFE 8V FLEX 2P
            <br />
            MANUAL
            <br />
            2008/2009
            <br />
            3000 KM
          </v-card-subtitle>
          <v-fade-transition>
            <v-overlay v-if="hover" absolute color="#000000">
              <b-button v-b-modal.modal-scrollable elevation="10" style="background-color: #d94b4b">Saiba mais</b-button>
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </template>
    </v-hover>

    <b-modal id="modal-scrollable" ok-only ok-variant="danger" scrollable title="Celta ">
      <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="1024" img-height="480">
        <b-carousel-slide img-src="https://www.giacomelliveiculos.com.br/carros/f9eba97a7e0af4ec5beb10a3d448ed7e-thumbjpg-chevrolet-celta-8371359-800-600-70.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://img.clasf.com.br/2019/07/24/Chevrolet-Celta-Spirit-Lt-1-0-Mpfi-8v-Flexp-5p-20190724202628.8521980015.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://www.giacomelliveiculos.com.br/carros/556959e50b7088c510b60e065990225e-thumbjpg-chevrolet-celta-8371359-1000-750-70.jpg"></b-carousel-slide>
      </b-carousel>
      <v-row>
        <v-col>
          <h6 class="my-1 center">Ano</h6>
          <p class="my-1 center">200/2009</p>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <h6 class="my-1 center">Km</h6>
          <p class="my-1 center">48.000</p>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <h6 class="my-1 center">Câmbio</h6>
          <p class="my-1 center">Maunal</p>
        </v-col>
      </v-row>
      <v-divider inset></v-divider>
      <v-row>
        <v-col>
          <h6 class="my-1 center">Portas</h6>
          <p class="my-1 center">4</p>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <h6 class="my-1 center">Final da placa</h6>
          <p class="my-1 center">9</p>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <h6 class="my-1 center">Cor</h6>
          <p class="my-1 center">Vermelho</p>
        </v-col>
      </v-row>
      <v-divider inset></v-divider>
      <v-row>
        <v-col>
          <h6 class="my-1 center">Combustivel</h6>
          <p class="my-1 center">Flex</p>
        </v-col>
      </v-row>
      <v-divider inset></v-divider>
      <v-row>
        <h4 class="center">Entre em contato com a gente ou vá até a loja, para fazer o finânciamento!</h4>
      </v-row>
      <v-divider inset></v-divider>
      <v-row>
        <p class="my-1" style="margin: 5%">Endereço: Rua Raimundo Carneiro 123</p>
      </v-row>
      <v-row>
        <p class="my-1" style="margin: 5%">Funcionamento: Segunda à Sexta | 9h00 às 18h00 e aos Sábados | 9h00 às 15h00</p>
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
    </b-modal>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    overlay: false,
  }),
};
</script>

<style></style>
