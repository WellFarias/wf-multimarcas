<template>
<v-app>
  <v-main>
    <router-view name="Home" />
    <router-view name="AppBar" />
    <router-view name="Veiculos" />
    <router-view name="Alterar" />
    <router-view name="Footer" />
    <router-view />
  </v-main>
</v-app>
</template>

<script>
export default {
  
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");
* {
  font-family: "Roboto", sans-serif;
}

.center {
  text-align: center;
}
.my-1 {
  color: black;
  font-size: 20px;
}
.margin {
  margin: auto;
}
::-webkit-scrollbar-track {
    background-color: white;
}
::-webkit-scrollbar {
    width: 9px;
    background: #F4F4F4;
    border-radius: 50px;


}
::-webkit-scrollbar-thumb {
    background: rgb(126, 125, 125);
    border-radius: 50px;
}
::-webkit-scrollbar-track-piece{
  background: rgb(212, 212, 212);
    border-radius: 50px;

}
</style>
