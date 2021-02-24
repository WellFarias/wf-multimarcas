<template>
  <v-main>
    <v-container >
      <v-row align="end" justify="end">
        <v-col class="mr-16">
          <v-btn color="secondary" dark v-bind="attrs" @click="dialog = true">+ Cadastrar Veiculo</v-btn>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card>
          <v-toolbar dark color="red darken-3" elevation="2">
            <v-toolbar-title>Cadastro de Veiculo</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>

          <v-row justify="center">
            <v-form style="width: 1000px" v-model="status" >
              <v-row>
                <v-col cols="6">
                  <v-text-field
                      :rules="inputRules"
                      v-model="carro.marca"
                      label="Marca do Carro"
                      hint="Ex: Chevrolet, Fiat, Renault e etc"
                      outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                      :rules="inputRules"
                      v-model="carro.nome"
                      label="Modelo do Carro "
                      hint="Ex: Chevrolet, Fiat, Volkswagen e etc"
                      outlined
                  ></v-text-field>
                </v-col>
              </v-row>
             <v-row>
               <v-col cols="6">
                 <v-text-field
                     :rules="inputRules"
                     v-model="carro.ano"
                     label="Ano/Modelo"
                     hint="Ex: 2005, 2006, 2007 e etc"
                     outlined
                 ></v-text-field>
               </v-col>
               <v-col>
                 <v-text-field
                     :rules="inputRules"
                     v-model="carro.finalPlaca"
                     label="Final da Placa"
                     outlined
                 ></v-text-field>
               </v-col>
             </v-row>
              <v-divider></v-divider>
             <v-row align="center" justify="center">
               <v-col cols="12" align-self="center">
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
               </v-col>
             </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                      :rules="inputRules"
                      v-model="carro.cor"
                      label="Cor do carro"
                      hint="Ex: branco, azul, vermelho e etc"
                      outlined
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                      :rules="inputRules"
                      v-model="carro.km"
                      label="Quilometragem do Carro"
                      hint="Ex: 1000, 2000, 100000 e etc"
                      outlined
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                      :rules="inputRules"
                      v-model="carro.motor"
                      label="Versão/Potência"
                      hint="Ex: 1.0, 1.4, 1.6 e etc"
                      outlined
                  ></v-text-field>

                </v-col>
              </v-row>
                <v-divider></v-divider>
              <v-col cols="12">
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
                    <v-btn @click="uploadImagePrincipal" :loading="loadingFotoPrincipal" :dark="!loadingFotoPrincipal">Salvar Imagen Principal</v-btn>
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
                    <v-col cols="8" align-self="center" >
                      <v-btn color="red darken-1" dark :disabled="!status" block height="50" @click="salvarCarro">Cadastrar</v-btn>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-col>
            </v-form>
          </v-row>
        </v-card>
      </v-dialog>

      <v-snackbar
          v-model="snackbar"
          timeout=3000
      >
        {{ message }}

      </v-snackbar>

    </v-container>
  </v-main>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      message: "",
      snackbar: false,
      status: false,
      imageAux: {},
      fotos: [],
      images: [],
      mainImage: [],
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
        this.snackbar = true
        this.message = "Cadastro realizado com sucesso1"
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
      this.mainImage = files;
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
              this.message = "Imagens salvas com sucesso"
              this.snackbar = true
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
      for (let i = 0; i < this.mainImage.length; i++) {
        let file = this.mainImage[i];
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
              this.message = "Imagem principal salva com sucesso"
              this.snackbar = true
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
  },
};
</script>

<style></style>
