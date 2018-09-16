<template>


  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="mt-4">
        <v-card-title class="blue">
          <div>
            <h1 class="white--text mb-0">Login Form</h1>

          </div>
        </v-card-title>

        <form>
          <div class="pa-3">
            <v-text-field v-validate="'required|max:10'" v-model="name" :counter="10" :error-messages="errors.collect('name')"
              label="Name" data-vv-name="name" required></v-text-field>
            
            <v-text-field v-validate="'required|password'" v-model="password" :error-messages="errors.collect('password')"
              label="password" data-vv-name="password" required>
            </v-text-field>
             

          </div>


          <v-card-actions>
            <v-btn @click="submit">Login</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-flex>
  </v-layout>
</template>




<script>
export default {
  name: "signin",
  data() {
    return {
      name: "",
      password: "",

      custom: {
        name: {
          required: () => "Name can not be empty",
          max: "The name field may not be greater than 10 characters"
          // custom messages
        },
        password: {
          required: "password field is required"
        }
      }
    };
  },
  mounted() {
    this.$validator.localize("en", this.dictionary);
  },

  methods: {
    submit() {
      this.$validator.validateAll();
    },
    clear() {
      this.name = "";
      this.password = null;
      this.$validator.reset();
    }
  }
};
</script>