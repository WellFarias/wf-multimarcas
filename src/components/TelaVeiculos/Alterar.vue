<template>
  <div
    style="
      display: flex;
      justify-content: space-arround;
      widht: 100%;
      height: 100%
    "
  >
    <v-container>
      <br />
      <h1 style="text-align: center; color: black; font-weight: 300">
        Veículos cadastrados
      </h1>
      <br />
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
                  src="https://www.giacomelliveiculos.com.br/carros/f9eba97a7e0af4ec5beb10a3d448ed7e-thumbjpg-chevrolet-celta-8371359-800-600-70.jpg"
                  height="200px"
                ></v-img>

                <v-card-title> carro </v-card-title>

                <v-card-subtitle>
                  <strong> R$0 </strong>
                  <br />
                  allll
                  <br />
                  dsadasd
                  <br />
                  asdsadasd
                  <br />
                  asdsaddsam
                </v-card-subtitle>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#000000">
                    <v-row>
                      <v-col>
                        <b-button
                          v-b-modal.modal-1
                          elevation="10"
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
          <b-modal
            id="modal-1"
            ok-title="Salvar"
            ok-variant="danger"
            cancel-title="Cancelar"
            scrollable
            size="lg"
            title="Alterar veículo"
          >
            <v-row style="margin-top: 10px">
              <v-col cols="2"> </v-col>
              <v-col cols="8">
                <h1 class="center">
                  Preço <v-text-field label="R$ 16000"></v-text-field>
                </h1>
              </v-col>
              <v-col cols="2"> </v-col>
            </v-row>
            <v-divider inset></v-divider>
            <v-row>
              <v-col>
                <h6 class="my-1">Nome</h6>
                <p class="my-1 center">
                  <v-text-field label="Corsa"></v-text-field>
                </p>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col>
                <h6 class="my-1">Marca</h6>
                <p class="my-1 center">
                  <v-text-field label="Chevrolet"></v-text-field>
                </p>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col>
                <h6 class="my-1">Câmbio do carro</h6>
                <p class="my-1 center">
                  <v-text-field label="Automático"></v-text-field>
                </p>
              </v-col>
              <v-divider vertical></v-divider>
            </v-row>
            <v-divider inset></v-divider>
            <v-row>
              <v-col>
                <h6 class="my-1">Ano</h6>
                <p class="my-1 center">
                  <v-text-field label="2005"></v-text-field>
                </p>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col>
                <h6 class="my-1">Portas</h6>
                <p class="my-1 center">
                  <v-text-field label="4"></v-text-field>
                </p>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col>
                <h6 class="my-1">Km</h6>
                <p class="my-1 center">
                  <v-text-field label="0"></v-text-field>
                </p>
              </v-col>
            </v-row>
            <v-divider inset></v-divider>
            <v-row>
              <v-col>
                <h6 class="my-1">Potência do motor</h6>
                <p class="my-1 center">
                  <v-text-field label="2.0"></v-text-field>
                </p>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col>
                <h6 class="my-1">Combustivel</h6>
                <p class="my-1 center">
                  <v-text-field label="Gasolina"></v-text-field>
                </p>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col>
                <h6 class="my-1">Cor</h6>
                <p class="my-1 center">
                  <v-text-field label="Vermelho"></v-text-field>
                </p>
              </v-col>
            </v-row>
          </b-modal>
        </v-col>
      </v-row>
      <b-modal
        ok-title="Excluir"
        ok-variant="danger"
        cancel-title="Cancelar"
        v-model="modalShow"
        ><h3>Deseja excluir o veículos?</h3></b-modal
      >
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalShow: false,
    };
  },
};
</script>

<style></style>
