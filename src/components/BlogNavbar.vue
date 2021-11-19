<template>
  <v-app-bar app elevation="0" outlined>
    <v-toolbar-title>
      <v-btn text @click="$router.push('/').catch((err) => {})">
        CATBLOG
      </v-btn>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text @click="$router.push('/admin').catch((err) => {})"
        ><v-icon left> mdi-table </v-icon> Admin
      </v-btn>
    </v-toolbar-items>

    <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
      <v-icon v-if="$vuetify.theme.dark">mdi-weather-night</v-icon>
      <v-icon v-else>mdi-white-balance-sunny</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: "blog-navbar",
};
</script>
