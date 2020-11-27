<template>
<v-main>
<router-view name="Home" />
<router-view name="AppBar" />
<router-view name="Veiculos" />
<router-view name="Footer"/>
<router-view />

</v-main>
</template>

<script>
export default {
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
* {
font-family: 'Roboto', sans-serif;

}

</style>