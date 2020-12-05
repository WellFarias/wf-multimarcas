<template>
  <div style="width: 100%; height: 100%; background-color: #d4d4d4">
    <v-container>
      <v-row justify="center">
        <v-card width="800" style="margin: auto; margin-top: 50px">
          <h1
            style="
              text-align: center;
              color: black;
              font-weight: 300;
              margin-top: 50px;
            "
          >
            Cadastro de veículo
          </h1>
          <br />
          <v-col cols="12">
            <v-text-field
              v-model="carro.nome"
              placeholder="Escreva o nome do carro"
              hint="Ex: Meriva, Pálio, Celta e etc"
              outlined
            ></v-text-field>
            <v-text-field
              v-model="carro.marca"
              placeholder="Escreva a marca do carro"
              hint="Ex: Chevrolet, Fiat, Volkswagen e etc"
              outlined
            ></v-text-field>
            <v-text-field
              v-model="carro.ano"
              placeholder="Digite o ano de fabricação"
              hint="Ex: 2005, 2006, 2007 e etc"
              outlined
            ></v-text-field>

            <hr />
            <h5>Número de portas</h5>
            <v-row justify="center" align-items="center">
              <v-col cols="3">
                <b-form-radio name="radio-size" value="2" v-model="carro.porta"
                  ><strong>2</strong></b-form-radio
                >
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="3">
                <b-form-radio name="radio-size" value="3" v-model="carro.porta"
                  ><strong>3</strong></b-form-radio
                >
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="3">
                <b-form-radio name="radio-size" value="4" v-model="carro.porta"
                  ><strong>4</strong></b-form-radio
                >
              </v-col>
            </v-row>
            <hr />
            <br />
            <v-text-field
              v-model="carro.km"
              placeholder="Digite a quilometragem do carro"
              hint="Ex: 1000, 2000, 100000 e etc"
              outlined
            ></v-text-field>

            <hr />
            <h5>Tipo de combustivel</h5>
            <v-row justify="center" align-items="center">
              <v-col cols="2">
                <b-form-radio
                  name="radio-size1"
                  value="gasolina"
                  v-model="carro.combustivel"
                  ><strong>Gasolina</strong></b-form-radio
                >
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="2">
                <b-form-radio
                  name="radio-size1"
                  value="alcool"
                  v-model="carro.combustivel"
                  ><strong>Álcool</strong></b-form-radio
                >
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="2">
                <b-form-radio
                  name="radio-size1"
                  value="gnv"
                  v-model="carro.combustivel"
                  ><strong>GNV</strong></b-form-radio
                >
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="2">
                <b-form-radio
                  name="radio-size1"
                  value="flex"
                  v-model="carro.combustivel"
                  ><strong>Flex</strong></b-form-radio
                >
              </v-col>
            </v-row>
            <hr />
            <br />

            <v-text-field
              v-model="carro.cor"
              placeholder="Digite a cor do carro"
              hint="Ex: branco, azul, vermelho e etc"
              outlined
            ></v-text-field>

            <hr />
            <h5>Câmbio do carro</h5>
            <v-row justify="center" align-items="center">
              <v-col cols="3">
                <b-form-radio
                  name="radio-size2"
                  value="mecanico"
                  v-model="carro.cambio"
                  ><strong>Mecânico</strong></b-form-radio
                >
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="3">
                <b-form-radio
                  name="radio-size2"
                  value="automatizado"
                  v-model="carro.cambio"
                  ><strong>Automátizado</strong></b-form-radio
                >
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="3">
                <b-form-radio
                  name="radio-size2"
                  value="automatico"
                  v-model="carro.cambio"
                  ><strong>Automático</strong></b-form-radio
                >
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="2">
                <b-form-radio
                  name="radio-size2"
                  value="cvt"
                  v-model="carro.cambio"
                  ><strong>CVT</strong></b-form-radio
                >
              </v-col>
            </v-row>
            <hr />
            <br />

            <v-text-field
              v-model="carro.motor"
              placeholder="Digite a potência do motor"
              hint="Ex: 1.0, 1.4, 1.6 e etc"
              outlined
            ></v-text-field>

            <v-text-field
              v-model="carro.preco"
              :value="reais"
              placeholder="Digite o preço do carro"
              hint="Ex: 16.000, 20.000, 50.000 e etcs"
              outlined
              prefix="R$"
            ></v-text-field>
            <v-row>
              <v-col cols="8">
                <v-file-input
                    v-model="carro.fotos"
                    multiple
                    @change="previewImages"
                    append-icon="mdi-camera"
                    truncate-length="8"
                ></v-file-input>
              </v-col>
              <v-col cols="2">
                <v-btn @click="uploadImages" :loading="loading"  :dark="!loading"> Salvar Imagens</v-btn>
              </v-col>

            </v-row>


            <v-card-actions>
              <v-row align="center" justify="center" class="ml-1 mr-1">
                <v-btn dark rounded block height="50" @click="salvarCarro"
                  >Cadastrar</v-btn
                >
              </v-row>
            </v-card-actions>
          </v-col>
        </v-card>
      </v-row>
    </v-container>
  </div>

</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      images : [],
      imageData: null,
      uploadValue: 0,
      picture: null,
      key: null,
      loading: false,
      dinheiro: 0
    };
  },

  computed: {
    ...mapGetters({
      carros: "carros",
      carro: "carro",
    }),

    reais(){
      return this.carro.preco?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }
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
      this.onUpload()


    },

    previewImage(file) {
        this.uploadValue=0;
        this.picture=null;
        this.imageData = file
    },

    previewImages(files){
      this.images = files
    },

    uploadImages(){
      this.loading = true
      console.log("images", this.images)
      for (let i = 0; i < this.images.length; i++){
        let file = this.images[i]
        console.log("file", file)
        const storageRef= this.$firebase.storage().ref(file.name).put(file);
        storageRef.on(`state_changed`,()=>{
            }, error=>{console.log(error.message)},
            ()=>{
              storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                this.carro.fotos.push(url)
              });
            }
        );
      }

      setTimeout(() => {
        this.loading = false
      }, 2000);

    },

    onUpload(){
      this.picture=null;
      const storageRef= this.$firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
            this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          }, error=>{console.log(error.message)},
          ()=>{this.uploadValue=100;
            storageRef.snapshot.ref.getDownloadURL().then((url)=>{
              this.carro.fotoPrincipal = url
              this.$firebase.database().ref("/carros").push(this.carro).then((savedItem) =>{
                this.addCarros(savedItem)
              })
            });
          }
      );
    }


  },

  mounted(){
    console.log(this.$firebase)
  }
};

</script>

<style></style>
