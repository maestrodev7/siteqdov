<template>

    <v-card class="draw-navpri">
    <v-layout class="">
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar
        color="blue-grey-darken-3"
        elevation="5"
      
        class="draw-navpri"
      >
        <v-app-bar-nav-icon 
            variant="text" 
            @click.stop="drawer = !drawer"
             class="hidden-md-and-up"
            ></v-app-bar-nav-icon>

        <v-toolbar-title>Qdov</v-toolbar-title>
          <v-spacer></v-spacer>
               <v-toolbar-items class="hidden-sm-and-down">
      <v-btn class="text-none" :to="{ name: 'home'}" stacked>
        <v-badge dot color="success">
          <v-icon>mdi-home-outline</v-icon>
        </v-badge>
        Home
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
        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-cart"></v-btn>

      <v-btn class="text-none" :to="{  name: 'signupUser'}" stacked>
        <v-icon>mdi-account-plus-outline</v-icon>
       Register
      </v-btn>

      <v-btn class="text-none" :to="{  name: 'loginUser'}" stacked>
        <v-icon>mdi-login-variant</v-icon>
       Login
      </v-btn>
      </v-app-bar>

     <v-navigation-drawer
        v-model="drawer"
        temporary
        class="draw-navpri"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" :to="{ name: 'home'}" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    <v-main>
      <v-container>
        <v-content>
          <router-view></router-view>
        </v-content>
      </v-container>
    </v-main>
    </v-layout>
  </v-card>

</template>
<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      items: [
        {
          title: 'Foo',
          value: 'foo',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
<style scoped>
.draw-navpri {

  z-index: 5;


}
</style>