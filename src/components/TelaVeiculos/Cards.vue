<template>
  <v-container>
    <v-row>
    <b-list-group>
    <b-list-group-item v-for="(carro, id) in this.carros" :key="id">
     
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
                src="https://www.giacomelliveiculos.com.br/carros/f9eba97a7e0af4ec5beb10a3d448ed7e-thumbjpg-chevrolet-celta-8371359-800-600-70.jpg"
                height="200px"
              ></v-img>

              <v-card-title> {{carro.nome}} </v-card-title>

              <v-card-subtitle>
                <strong> R${{carro.preco}} </strong>
                <br />
                {{carro.motor}}
                <br />
                {{carro.cambio}}
                <br />
                {{carro.ano}}
                <br />
                {{carro.km}}km
              </v-card-subtitle>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#000000">
                  <b-button
                    v-b-modal.id
                    elevation="10"
                    style="background-color: #d94b4b"
                    >Saiba mais</b-button
                  >
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
        <b-modal
          :id="carro.id"
          ok-only
          ok-variant="danger"
          scrollable
          title="Nome do carro: "
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
              <h1 class="center">R${{carro.preco}}</h1>
            </v-col>
            <v-col cols="2"> </v-col>
          </v-row>

          <v-row>
            <v-col>
              <h6 class="my-1 center">Ano</h6>
              <p class="my-1 center">{{carro.ano}}</p>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
              <h6 class="my-1 center">Portas</h6>
              <p class="my-1 center">{{carro.porta}}</p>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
              <h6 class="my-1 center">Km</h6>
              <p class="my-1 center">{{carro.km}}</p>
            </v-col>
          </v-row>
          <v-divider inset></v-divider>
          <v-row>
              <v-col>
              <h6 class="my-1 center">Potência do motor</h6>
              <p class="my-1 center">{{carro.motor}}</p>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
              <h6 class="my-1 center">Combustivel</h6>
              <p class="my-1 center">{{carro.combustivel}}</p>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
              <h6 class="my-1 center">Cor</h6>
              <p class="my-1 center">{{carro.cor}}</p>
            </v-col>
          </v-row>
          <v-divider inset></v-divider>
          <v-row>
            <v-col>
              <h6 class="my-1 center">Câmbio do carro</h6>
              <p class="my-1 center">{{carro.cambio}}</p>
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
        </b-modal>
      </v-col>
    </b-list-group-item>
    </b-list-group>
    <v-btn @click="exibirCarro">TESTE!</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    overlay: false,
  }),

  methods: {
    exibirCarro(){
      this.$http('carros.json').then(res => {
        this.carros = res.data
        console.log(this.carros)
      })
    }
  }
};
</script>

<style></style>
