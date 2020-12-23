<template>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          + Cadastrar Veiculo
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="black"
        >
         
          <v-toolbar-title>Cadastro de Veiculo</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
           <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          </v-toolbar-items>
        </v-toolbar>
         <v-row justify="center">
        <v-form  v-model="valid" lazy-validation style="width: 1000px">
          <v-col cols="12">

            <v-text-field
            :rules="inputRules"
              v-model="carro.nome"
              label="Escreva o nome do carro"
              hint="Ex: Meriva, Pálio, Celta e etc"
              outlined
            ></v-text-field>
            <v-text-field
            :rules="inputRules"
              v-model="carro.marca"
              label="Escreva a marca do carro"
              hint="Ex: Chevrolet, Fiat, Volkswagen e etc"
              outlined
            ></v-text-field>
            <v-text-field
            :rules="inputRules"
              v-model="carro.ano"
              label="Digite o ano de fabricação"
              hint="Ex: 2005, 2006, 2007 e etc"
              outlined
            ></v-text-field>

            <hr />
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
            <hr />
            <br />
            <v-text-field
            :rules="inputRules"
              v-model="carro.km"
              label="Digite a quilometragem do carro"
              hint="Ex: 1000, 2000, 100000 e etc"
              outlined
            ></v-text-field>

            <hr />
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
            </v-radio-group>
            <hr />
            <br />

            <v-text-field
            :rules="inputRules"
              v-model="carro.cor"
              label="Digite a cor do carro"
              hint="Ex: branco, azul, vermelho e etc"
              outlined
            ></v-text-field>

            <hr />
            <h5>Câmbio do carro</h5>
            <v-radio-group v-model="carro.cambio" row :rules="inputRules">
              <v-col cols="2">
              <v-radio label="Manual" color="red" value="manual"></v-radio>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="2">
              <v-radio label="Automático sequencial" color="red" value="automatizado"></v-radio>
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
            <hr />
            <br />

            <v-text-field
            :rules="inputRules"
              v-model="carro.motor"
              label="Digite a potência do motor"
              hint="Ex: 1.0, 1.4, 1.6 e etc"
              outlined
            ></v-text-field>

            <v-text-field
            :rules="inputRules"
              v-model="carro.preco"
              :value="reais"
              label="Digite o preço do carro"
              hint="Ex: 16.000, 20.000, 50.000 e etcs"
              outlined
              prefix="R$"
            ></v-text-field>
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
                <v-btn @click="uploadImages" :loading="loading"  :dark="!loading"> Salvar Imagens</v-btn>
              </v-col>

            </v-row>


            <v-card-actions>
              <v-row align="center" justify="center" class="ml-1 mr-1">
                <v-btn dark rounded block height="50" :disabled="!valid" @click="salvarCarro"
                  >Cadastrar</v-btn
                >
              </v-row>
            </v-card-actions>
          </v-col>
          </v-form>
      </v-row>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      imageAux: {},
      fotos: [],
      images : [],
      imageData: null,
      uploadValue: 0,
      picture: null,
      key: null,
      loading: false,
     // dinheiro: 0,
      valid: false,
      inputRules: [(v) => !!v || "Campo obrigatório"],
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    };
  },

  computed: {
    ...mapGetters({
      carros: "carros",
      carro: "carro",
      id: "id"
    }),

    reais(){
      return this.$store.state.carro.preco?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
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

   
    limpar(){
      this.$store.state.carro = ""
      this.$store.state.id = ""

    },

    salvarCarro(){
      console.log( "carro á salvar",this.$store.state.carro)
      this.$http.post('/carros.json', this.$store.state.carro).then( () => {
         this.limpar()
       })
    },

    /*salvarCarro() {
      var newCarroKey = this.$firebase.database().ref().child('carros').push().key;
      var updates = {}
      updates['/carros' + newCarroKey] = this.$store.state.carro
      return this.$firebase.database().ref().update(updates)
      
    },*/
   
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
      for (let i = 0; i < this.images.length; i++){
        let file = this.images[i]
        const storageRef= this.$firebase.storage().ref(file.name).put(file);
        storageRef.on(`state_changed`,()=>{
            }, error=>{console.log(error.message)},
            ()=>{
              storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                 this.$store.commit('addFotos', url);

              });
            }
        );

      }
        this.imagens = []

      setTimeout(() => {
        this.loading = false
      }, 2000);

    },

  },
  created(){
    console.log( " O CARRO ", this.$store.state.carro)
  },
  mounted(){
    console.log(this.$firebase)
  },
};

</script>

<style></style>
