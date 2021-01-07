 <template>
 <v-container fluid class="pa-0">
    <v-parallax style="height: 750px" src="/highway.jpg">
      <div>
        <h1 class="center" style="font-weight: 300">WF Multimarcas</h1>
        <p class="center"
        >Aqui você encontra os melhores preços pra financiar seu semi-novo</p>
      </div>
    </v-parallax>
    <DestaqueVeiculo />
    <QuemSomosNos />
 </v-container>
</template>

<script>
import DestaqueVeiculo from "./DestaqueVeiculos";
import QuemSomosNos from "./QuemSomosNos";

export default {
  components: { DestaqueVeiculo, QuemSomosNos }
};
</script>

<style>

.center {
  text-align: center;
}
</style>