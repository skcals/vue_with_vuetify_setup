<template>
    <div class="sidebar">
        <v-app>
        <v-navigation-drawer
             v-bind:class= "{'hide_sidebar':!hide_sidebar, 'hideNav':!hideOnSmall}"
            stateless
            value="true"
            
        >   
        <v-list class="pt-5">

        </v-list>
            <v-list class="pt-3" > 
            <v-list-tile>
                <v-list-tile-action >
                <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile>

            <v-list-group
                prepend-icon="account_circle"
                value="true"
            >
                <v-list-tile slot="activator">
                <v-list-tile-title>Users</v-list-tile-title>
                </v-list-tile>

                <v-list-group
                no-action
                sub-group
                value="true"
                >
                <v-list-tile slot="activator">
                    <v-list-tile-title>Admin</v-list-tile-title>
                </v-list-tile>

                <v-list-tile
                    v-for="(admin, i) in admins"
                    :key="i"
                    
                >
                    <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                    <v-list-tile-action>
                    <v-icon v-text="admin[1]"></v-icon>
                    </v-list-tile-action>
                </v-list-tile>
                </v-list-group>

                <v-list-group
                sub-group
                no-action
                >
                <v-list-tile slot="activator">
                    <v-list-tile-title>Actions</v-list-tile-title>
                </v-list-tile>

                <v-list-tile
                    v-for="(crud, i) in cruds"
                    :key="i"
                     
                >
                    <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
                    <v-list-tile-action>
                    <v-icon v-text="crud[1]"></v-icon>
                    </v-list-tile-action>
                </v-list-tile>
                </v-list-group>
            </v-list-group>
            </v-list>
        </v-navigation-drawer>
        </v-app>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "sidebar",
  data() {
    return {
      admins: [["Management", "people_outline"], ["Settings", "settings"]],
      cruds: [
        ["Create", "add"],
        ["Read", "insert_drive_file"],
        ["Update", "update"],
        ["Delete", "delete"]
      ]
    };
  },
  computed: {
    ...mapGetters(["hide_sidebar", "show_full_main", "hideOnSmall"])
  }
};
</script>

<style>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
@media screen and (max-width: 900px) {
  .hide_sidebar {
    margin-left: -300px;
  }
}
</style>


