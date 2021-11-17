<template>
  <v-app>
    <v-app-bar app dense>
      <v-toolbar-title>Cat Blog</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-switch
        class="mt-5"
        v-model="$vuetify.theme.dark"
        inset
        :append-icon="`${
          $vuetify.theme.dark ? 'mdi-weather-night' : 'mdi-white-balance-sunny'
        }`"
        :label="`${$vuetify.theme.dark ? 'Dark' : 'Light'}`"
      >
      </v-switch>
    </v-app-bar>

    <v-main>
      <v-container> </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
