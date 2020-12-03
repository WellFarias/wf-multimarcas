<template>
  <v-container>
    <v-row>
      <v-card width="600" style="margin: auto; margin-top: 50px">
        <h1 style="text-align: center; color: black; font-weight: 300">
          Cadastro de veículos
        </h1>
        <br>
        <v-text-field
          v-model="carro.nome"
          label="Escreva o nome do carro"
          hint="Ex: Meriva, Pálio, Celta e etc"
          single-line
          outlined
        ></v-text-field>
        <v-text-field
          v-model="carro.marca"
          label="Escreva a marca do carro"
          hint="Ex: Chevrolet, Fiat, Volkswagen e etc"
          single-line
          outlined
        ></v-text-field>
        <v-text-field
          v-model="carro.ano"
          label="Digite o ano de fabricação"
          hint="Ex: 2005, 2006, 2007 e etc"
          single-line
          outlined
        ></v-text-field>

        <h5>Número de portas</h5>
        <v-row justify="center" align-items="center">
          <v-col cols=3>
            <b-form-radio name="radio-size"><strong>2</strong></b-form-radio>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols=3>
            <b-form-radio name="radio-size"><strong>3</strong></b-form-radio>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols=3>
            <b-form-radio name="radio-size"><strong>4</strong></b-form-radio>
          </v-col>
        </v-row>

        <v-text-field
          v-model="carro.km"
          label="Digite a quilometragem do carro"
          hint="Ex: 1000, 2000, 100000 e etc"
          single-line
          outlined
        ></v-text-field>

         <h5>Tipo de combustivel</h5>
        <v-row justify="center" align-items="center">
          <v-col cols=2>
            <b-form-radio name="radio-size"><strong>Gasolina</strong></b-form-radio>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols=2>
            <b-form-radio name="radio-size"><strong>Álcool</strong></b-form-radio>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols=2>
            <b-form-radio name="radio-size"><strong>GNV</strong></b-form-radio>
          </v-col>
           <v-divider vertical></v-divider>
          <v-col cols=2>
            <b-form-radio name="radio-size"><strong>Flex</strong></b-form-radio>
          </v-col>
        </v-row>
        
        <v-text-field
          v-model="carro.cor"
          label="Digite a cor do carro"
          hint="Ex: branco, azul, vermelho e etc"
          single-line
          outlined
        ></v-text-field>


        <v-card-actions>
          <v-row align="center" justify="center" class="ml-1 mr-1">
            <v-btn dark rounded block height="50">Cadastrar</v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  row: null,

  computed: {
    ...mapGetters({
      carros: "carros",
      carro: "carro",
    }),
  },

  methods: {
    ...mapMutations({
      setCarros: "setCarros",
      setCarro: "setCarro",
      addCarros: "addCarros",
    }),

    ...mapActions({
      salvarCarro: "salvarCarros",
    }),

    salvarCarro() {
      this.carros.addCarros = this.addCarros;
      console.log(this.carros);
    },
  },
};
</script>

<style></style>
