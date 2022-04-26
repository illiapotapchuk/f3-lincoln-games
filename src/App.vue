<template>
  <v-app>
    <v-app-bar app color="blue-grey" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="./assets/f3naperville-logo.png"
          transition="scale-transition"
          width="80"
        />

        <v-img
          alt="F3 Naperville"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="./assets/f3naperville-text.png"
          width="200"
        />
      </div>
    </v-app-bar>

    <v-main>
      <Main />
    </v-main>
  </v-app>
</template>

<script>
import Main from "./components/Main";

export default {
  name: "App",

  components: {
    Main,
  },

  data: () => ({
    //
  }),
};
</script>
