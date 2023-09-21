<template>
  <v-app>
    <v-app-bar
      app
      color="orange"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
<h2>Kinder</h2>
<!--        <v-img-->
<!--          alt="Vuetify Name"-->
<!--          class="shrink mt-1 hidden-sm-and-down"-->
<!--          contain-->
<!--          min-width="100"-->
<!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"-->
<!--          width="100"-->
<!--        />-->
      </div>

      <v-spacer></v-spacer>
      <SearchProductsInput />
      <v-btn>Search Bar Here</v-btn>
      <v-spacer></v-spacer>

        <v-btn @click="show_vitrine" x-small color="warning" class="mr-2">Vitrine New</v-btn>


        <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import SearchProductsInput from "@/components/inputs/SearchProductsInput";
export default {
  name: 'App',
  components: {SearchProductsInput},
  data: () => ({
    //
  }),
    methods: {
        show_vitrine(){
            this.$router.push('/vitrinenew')
        }
    }
};
</script>
