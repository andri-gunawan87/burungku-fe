<template>
  <div>
    <!-- <v-navigation-drawer
      color="rgba(253, 241, 235, 0.8)"
      v-model="drawer"
      temporary
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon color="#3F3937">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="hamburger-menu" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-app-bar
      app
      collapse-on-scroll
      max-width="100%"
      color="rgba(245,238,235,0.5)"
      elevation="0"
    >
      <!-- <v-app-bar-nav-icon
        class="hamburger-menu"
        @click.stop="drawer = !drawer"
      /> -->
      <v-spacer />
      <v-toolbar-title class="text-title" v-text="title" />
      <v-spacer />
      <v-btn icon color="#3F3937" class="mx-3" v-bind="attrs" v-on="on">
        <nuxt-link :to="'/user/my-tiket'">
          <v-icon>mdi-ticket</v-icon>
        </nuxt-link>
      </v-btn>
      <v-menu transition="slide-x-transition" bottom right :offset-y="offset">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon color="#3F3937" v-bind="attrs" v-on="on">
            <v-icon>mdi-account-outline</v-icon>
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
        {
          icon: "mdi-ticket",
          title: "Tiket",
          to: "/user/my-tiket",
        },
      ],
      loggedInListMenu: [
        { title: "Profile", to: "/user/Profile" },
        { title: "My Tiket", to: "/user/my-tiket" },
        { title: "Logout", to: "/account/login" },
      ],
      title: "Lomba Burung",
      offset: true,
    };
  },

  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
};
</script>
