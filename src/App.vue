<template>
  <div id="app">
    <v-app>

      <div class="fix-nav">
        <Navbar />
      </div>

      <div class="m-sidebar">
        <Sidebar />
      </div>

      <div class="m-content  pt-5  my-4" v-bind:class="{'m-content-right':!hideOnSmall}">
        <router-view />
      </div>

    </v-app>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Navbar,
    Sidebar
  },
  computed: {
    ...mapGetters(["hideOnSmall"])
  }
};
</script>




<style lang="css">
.navbar .application--wrap {
  min-height: auto !important;
}

.clearfix {
  overflow: auto;
}

.fix-nav {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.m-content {
  position: relative;
  transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 300px;
}

.m-content-right {
  margin-left: 0;
}
@media screen and (max-width: 992px) {
  .m-content {
    margin-left: 0px;
  }
}
</style>