<template>
  <v-card>
    <v-layout>
    <v-app>
    <v-app-bar app color="blue-grey-darken-3">

      <v-app-bar-nav-icon 
        class="hidden-md-and-up"
         @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
          <v-toolbar-title >Qdov</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
      <v-btn class="text-none" stacked>
        <v-badge dot color="success">
          <v-icon>mdi-home-outline</v-icon>
        </v-badge>
        <router-link  class="link" :to="{ name: 'home'}">Home</router-link>
      </v-btn>

      <v-btn class="text-none" stacked>
        <v-icon>mdi-account-plus-outline</v-icon>
       <router-link class="link" :to="{  name: 'signupUser'}">Register</router-link>
      </v-btn>

      <v-btn class="text-none" stacked>
        <v-icon>mdi-login-variant</v-icon>
       <router-link class="link" :to="{  name: 'loginUser'}">Login</router-link>
      </v-btn>



      <v-btn class="text-none" stacked>
        <v-badge content="9+" color="error">
          <v-icon>mdi-store-outline</v-icon>
        </v-badge>
        Store
      </v-btn>

      <v-btn class="text-none" stacked>
        <v-badge content="2" color="error">
          <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
        Notifications
      </v-btn>    
    </v-toolbar-items>
                <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>
  </v-app>
  </v-layout>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
 drawer: null,
      }
    },
  }
</script>
