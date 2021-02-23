<template>
  <v-container>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="secondary" dark v-bind="attrs" v-on="on">+ Cadastrar Veiculo</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="black">
          <v-toolbar-title>Cadastro de Veiculo</v-toolbar-title>
          <v-spacer></v-spacer>
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-toolbar>

        <v-row justify="center">
          <v-form style="width: 1000px" v-model="status" >
            <v-col cols="12">
              <v-text-field
                :rules="inputRules"
                v-model="carro.marca"
                label="Marca do Carro"
                hint="Ex: Chevrolet, Fiat, Renault e etc"
                outlined
              ></v-text-field>
              <v-text-field
                :rules="inputRules"
                v-model="carro.nome"
                label="Modelo do Carro "
                hint="Ex: Chevrolet, Fiat, Volkswagen e etc"
                outlined
              ></v-text-field>
              <v-text-field
                :rules="inputRules"
                v-model="carro.ano"
                label="Ano/Modelo"
                hint="Ex: 2005, 2006, 2007 e etc"
                outlined
              ></v-text-field>carros
              <v-divider></v-divider>
              <br />
              <h5>Número de portas</h5>
              <v-radio-group v-model="carro.porta" row :rules="inputRules">
                <v-col cols="2">
                  <v-radio label="2" color="red" value="2"></v-radio>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="2">
                  <v-radio label="3" color="red" value="3"></v-radio>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="2">
                  <v-radio label="4" color="red" value="4"></v-radio>
                </v-col>
              </v-radio-group>
              <v-divider></v-divider>
              <br />
              <v-text-field
                :rules="inputRules"
                v-model="carro.km"
                label="Quilometragem do Carro"
                hint="Ex: 1000, 2000, 100000 e etc"
                outlined
              ></v-text-field>
              <v-divider></v-divider>
              <br />
              <h5>Tipo de combustivel</h5>
              <v-radio-group v-model="carro.combustivel" row :rules="inputRules">
                <v-col cols="2">
                  <v-radio label="Gasolina" color="red" value="gasolina"></v-radio>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="2">
                  <v-radio label="Álcool" color="red" value="alcool"></v-radio>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="2">
                  <v-radio label="GNV" color="red" value="gnv"></v-radio>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="2">
                  <v-radio label="Flex" color="red" value="flex"></v-radio>
                </v-col>
                <v-col cols="2">
                  <v-radio label="Disel" color="red" value="disel"></v-radio>
                </v-col>
              </v-radio-group>
              <v-divider></v-divider>
              <br />

              <v-text-field
                :rules="inputRules"
                v-model="carro.cor"
                label="Cor do carro"
                hint="Ex: branco, azul, vermelho e etc"
                outlined
              ></v-text-field>
              <v-divider></v-divider>
              <br />
              <h5>Câmbio do carro</h5>
              <v-radio-group v-model="carro.cambio" row :rules="inputRules">
                <v-col cols="2">
                  <v-radio label="Manual" color="red" value="manual"></v-radio>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="2">
                  <v-radio label="Semi-Automático" color="red" value="semi-automatico"></v-radio>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="2">
                  <v-radio label="Automático" color="red" value="automatico"></v-radio>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="2">
                  <v-radio label="CVT" color="red" value="cvt"></v-radio>
                </v-col>
              </v-radio-group>
              <v-divider></v-divider>
              <br />

              <v-text-field
                :rules="inputRules"
                v-model="carro.motor"
                label="Versão/Potência"
                hint="Ex: 1.0, 1.4, 1.6 e etc"
                outlined
              ></v-text-field>

               <v-text-field
                :rules="inputRules"
                v-model="carro.finalPlaca"
                label="Final da Placa"
                outlined
              ></v-text-field>

              <v-text-field
                :rules="inputRules"
                v-model="carro.preco"
                :value="reais"
                label="Valor do carro"
                hint="Ex: 16.000, 20.000, 50.000 e etcs"
                outlined
                prefix="R$"
              ></v-text-field>
                  <v-textarea outlined name="input-7-4" label="Observações" v-model="carro.descricao"></v-textarea>
                  <v-row>
                    <v-col>
                    <v-file-input
                    :rules="inputRules"
                    v-model="imageAux.fotoPrincipal"
                    multiple
                    @change="previewImagePrincipal"
                    append-icon="mdi-camera"
                    truncate-length="8"
                  ></v-file-input>
                    </v-col>
                    <v-col cols="4">
                  <v-btn @click="uploadImagePrincipal" :loadingFotoPrincipal="loadingFotoPrincipal" :dark="!loadingFotoPrincipal">Salvar Imagen Principal</v-btn>
                </v-col>
                  </v-row>
              <v-row>
                <v-col cols="8">
                  <v-file-input
                    :rules="inputRules"
                    v-model="imageAux.fotos"
                    multiple
                    @change="previewImages"
                    append-icon="mdi-camera"
                    truncate-length="8"
                  ></v-file-input>
                </v-col>
                <v-col cols="2">
                  <v-btn @click="uploadImages" :loading="loading" :dark="!loading">Salvar Imagens</v-btn>
                </v-col>
              </v-row>

              <v-card-actions>
                <v-row align="center" justify="center" class="ml-1 mr-1">
                  <v-btn dark rounded :disabled="!status" block height="50" @click="salvarCarro">Cadastrar</v-btn>
                </v-row>
              </v-card-actions>
            </v-col>
          </v-form>
        </v-row>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      status: false,
      imageAux: {},
      fotos: [],
      images: [],
      imageData: null,
      uploadValue: 0,
      picture: null,
      key: null,
      loading: false,
      loadingFotoPrincipal: false,
      // dinheiro: 0,
      valid: false,
      inputRules: [v => !!v || "Campo obrigatório"],
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    };
  },

  computed: {
    ...mapGetters({
      carros: "carros",
      carro: "carro",
      id: "id"
    }),

    reais() {
      return this.$store.state.carro.preco?.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      });
    }
  },

  methods: {
    ...mapMutations({
      setCarros: "setCarros",
      setCarro: "setCarro",
      addCarros: "addCarros"
    }),

    ...mapActions({
      salvarCarro: "salvarCarros"
    }),

    refresh() {
      window.location.reload();
    },

    salvarCarro() {
      this.$http.post("/carros.json", this.$store.state.carro).then(() => {
        this.refresh();
      });
    },

    previewImage(file) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = file;
    },
   
    previewImages(files) {
      this.images = files;
    },
    previewImagePrincipal(files) {
      this.images = files;
    },

    uploadImages() {
      this.loading = true;
      for (let i = 0; i < this.images.length; i++) {
        let file = this.images[i];
        const storageRef = this.$firebase
          .storage()
          .ref(file.name)
          .put(file);
        storageRef.on(
          `state_changed`,
          () => {},
          error => {
            console.log(error.message);
          },
          () => {
            storageRef.snapshot.ref.getDownloadURL().then(url => {
              this.$store.commit("addFotos", url);
            });
            console.log(this.uploadImages);
          }
        );
      }
      this.imagens = [];

      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },


 uploadImagePrincipal() {
      this.loadingFotoPrincipal = true;
      for (let i = 0; i < this.images.length; i++) {
        let file = this.images[i];
        const storageRef = this.$firebase
          .storage()
          .ref(file.name)
          .put(file);
        storageRef.on(
          `state_changed`,
          () => {},
          error => {
            console.log(error.message);
          },
          () => {
            storageRef.snapshot.ref.getDownloadURL().then(url => {
              this.$store.commit("addFotoPrincipal", url);
            });
            console.log(this.uploadImages);
          }
        );
      }
      this.imagens = [];

      setTimeout(() => {
        this.loadingFotoPrincipal = false;
      }, 2000);
    }
 // fim

  },
};
</script>

<style></style>
