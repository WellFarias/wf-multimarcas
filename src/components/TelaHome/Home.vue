 <template>
  <v-main style="padding: 0px">
    <v-parallax style="height: 750px" src="/highway.jpg">
      <div>
        <h1 class="center" style="font-weight: 300">WF Multimarcas</h1>
        <p class="center"
        >Aqui você encontra os melhores preços pra financiar seu semi-novo</p>
      </div>
    </v-parallax>
    <DestaqueVeiculo />
    <QuemSomosNos />
  </v-main>
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