<template>

    <v-card class="draw-navpri">
    <v-layout class="">
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
    <div>
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

        <v-btn v-if="!isAuthenticated" class="text-none" :to="{  name: 'signupUser'}" stacked>
          <v-icon>mdi-account-plus-outline</v-icon>
        Register
        </v-btn>
        <v-btn  v-if="isAuthenticated" class="text-none"  @click="logOut" stacked>
          <v-icon>mdi-profile</v-icon>
          Profile
        </v-btn>
        <v-btn  v-if="isAuthenticated" class="text-none"  @click="logOut" stacked>
          <v-icon>mdi-login-variant</v-icon>
          Log Out
        </v-btn>
        <v-btn  v-if="!isAuthenticated" class="text-none" :to="{  name: 'loginUser'}" stacked>
          <v-icon>mdi-login-variant</v-icon>
        Login
        </v-btn>
      </v-app-bar>
    </div>
    <div>
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
    </div>
    <v-carousel class="carousel" height="400"> <!-- Adjust the height as needed -->
        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
          <h2 class="display-2">Text for Docks</h2>
          <p class="subtitle-1">Your additional information here.</p>
        </v-carousel-item>
        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>
        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
      </v-carousel>
    <!-- <div>
    <v-main>
      <v-container>
        <v-content>
          <router-view></router-view>
        </v-content>
      </v-container>
    </v-main>
    </div> -->
    </v-layout>
  </v-card>

</template>
<script>
import { getAuth, signOut } from "firebase/auth";
  export default {
    data: () => ({
      drawer: false,
      group: null,
      isAuthenticated: false,
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
    
    methods: {
      logOut(){
        const auth = getAuth();
        signOut(auth).then(() => {
          console.log("disconnected");
          this.isAuthenticated = true
        }).catch((error) => {
          // An error happened.
          console.log(error);
        });
      }
    },
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
.carousel {
  margin-top: 5px; /* Adjust the margin as needed */
}
</style>