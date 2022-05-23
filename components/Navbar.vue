<template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-menu transition="slide-x-transition" bottom right :offset-y="offset">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="deep-orange"
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            ...
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(data, i) in loggedInListMenu"
            :key="i"
            :to="data.to"
            router
            exact
          >
            <v-list-item-title>{{ data.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-login",
          title: "Login",
          to: "/account/login",
        },
        {
          icon: "mdi-account-plus",
          title: "Register",
          to: "/account/register",
        },
      ],
      loggedInListMenu: [
        { title: "Profile", to: "/user/Profile" },
        { title: "My Tiket", to: "/user/my-tiket" },
        { title: "Logout", to: "/account/login" },
      ],
      title: "Kontes Burung",
      offset: true,
    };
  },

  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
};
</script>
