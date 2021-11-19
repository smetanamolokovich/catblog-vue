<template>
  <div class="admin-panel">
    <h2 class="mb-5">Admin panel</h2>

    <div class="text-right">
      <v-btn color="primary" class="mb-5" @click="$router.push('/create')">
        <v-icon> mdi-plus </v-icon> New post
      </v-btn>
    </div>

    <admin-table :posts="$store.getters.sortedByID"></admin-table>
  </div>
</template>
<script>
export default {};
</script>
