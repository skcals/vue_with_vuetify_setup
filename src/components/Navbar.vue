<template>
  <div class="navbar" id="app">
     
        <v-toolbar>
            <v-toolbar-side-icon @click ="toggel_sidebar"></v-toolbar-side-icon>
            <v-toolbar-title>Vue with Vuetify</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                
            <v-btn flat><router-link to="/">Home</router-link></v-btn>
            <v-btn flat><router-link to="/signin">Signin</router-link></v-btn>
            <v-btn flat><router-link to="/login">Login</router-link></v-btn>
            </v-toolbar-items>
        </v-toolbar>
    
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  computed: {},
  methods: {
    toggel_sidebar() {
      this.$store.commit("navToggel");
    }
  }
};
</script>
<style>
a {
  color: white;
  text-decoration: none;
}
</style>

