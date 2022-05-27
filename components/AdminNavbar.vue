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
      <v-toolbar-title v-text="propsTitle" />
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
  props: {
    propsTitle: {
      type: String,
      default: "Kontes Nih"
    }
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/admin",
        },
        {
          icon: "mdi-login",
          title: "List User",
          to: "/admin/ListAllUser",
        },
        {
          icon: "mdi-login",
          title: "List EO",
          to: "/admin/ListAllEO",
        },
        {
          icon: "mdi-account-plus",
          title: "List All Event",
          to: "/admin/ListAllEvent",
        },
      ],
      loggedInListMenu: [
        { title: "Profile", to: "/user/Profile" },
        { title: "Logout", to: "/account/login" },
      ],
      // title: this.propsTitle,
      offset: true,
    };
  },

  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
};
</script>