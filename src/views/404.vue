<template>
  <div class="404">
    <div
      style="max-width: 800px; margin: 0 auto"
      class="d-flex flex-column justify-space-between align-center text-center"
    >
      <v-img
        class="my-10"
        width="100%"
        max-width="500"
        max-height="500"
        src="https://i.imgur.com/kZNTPqI.png"
      ></v-img>

      <h2>This Page Contains Nothing but Scraps...</h2>
      <p class="text--secondary my-3">
        A perfectly enticing pizza box sitting on a table. You open it filled
        with anticipation. And find… nothing but scraps. Perhaps a half eaten
        crust. And a lot of grease. The anticipation turns to deep
        disappointment and despair. There’s nothing left!
      </p>

      <v-btn class="mt-5" plain @click="$router.push('/')">
        <v-icon left> mdi-arrow-left-top </v-icon>Back to homepage
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {};
</script>
