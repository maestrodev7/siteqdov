<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window >
                <v-window-item >
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>                            
                          <h3 class="text-center display-2 teal--text text--accent-3">
                            Login form  
                          </h3>
                          <div v-if="error" class="alert alert-danger">{{error}}</div>
                        </v-toolbar-title>
                     </v-toolbar>
                        <div class="text-center mt-4">
                          <v-btn color="red" class="mr-4" dark small   outlined>
                            <v-icon>mdi-google</v-icon>google
                          </v-btn>
                          <v-btn color="info" class="mr-4" dark small outlined>
                            <v-icon>mdi-facebook</v-icon>facebook
                          </v-btn>

                        </div>
                        <h4 class="text-center mt-4"></h4>
                        <v-form   v-model="form" @submit.prevent="userLogin">
                          <v-text-field
                            label="Email"
                            name="email"
                            v-model="user.email"
                            append-icon="mdi-email"
                            type="text"
                            color="teal accent-3"
                          />

                          <v-text-field
                            id="password"
                            v-model="user.password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                            label="Password"
                            name="password"
     
                            :type="show1 ? 'text' : 'password'" 
                            color="teal accent-3"
                            counter @click:append="show1 = !show1"
                          />
                        
                        <router-link to="/forgot-password">Forgot password ?</router-link>
                        
                      
                      <div class="text-center mt-3">
                        <v-btn 
                        :disabled="dialog"
                        :loading="dialog"
                        type="submit" 
                        rounded 
                        color="teal accent-3" 
                        dark>
                        SIGN IN
                      </v-btn>
                      <v-dialog
                      v-model="dialog"
                      hide-overlay
                      persistent
                      width="300"
                    >
                      <v-card
                      v-if="!thanks"
                        color="primary"
                        dark
                      >
                        <v-card-text>
                          Please stand by
                          <v-progress-linear
                            indeterminate
                            color="white"
                            class="mb-0"
                          ></v-progress-linear>
                        </v-card-text>
                      </v-card>
                                <v-card v-if="thanks">
                            <v-toolbar
                            density="comfortable"
                            color="success"
                            variant="tonal"
                            >    Loggin succesfull</v-toolbar>
                            <v-card-text>
                              <div class="text-h4 ">Thank you!</div>
                            </v-card-text>
                            <v-card-actions class="justify-end">
                              <v-btn
                                text
                                @click="dialog = false, redirect()"
                              >Close</v-btn>
                            </v-card-actions>
                          </v-card>
                    </v-dialog>

                     <v-overlay :model-value="overlay" class="align-center justify-center">
                      <v-progress-circular
                        indeterminate
                        size="64"
                        color="primary"
                      ></v-progress-circular>
                    </v-overlay>
                    </div>

                    </v-form>
                  </v-card-text>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, Friend!</h1>
                        <h5
                          class="text-center"
                        >Enter your personal details and start journay with us</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark :to="{  name: 'signupUser'}">SIGN UP</v-btn>
                      </div>
                    </v-col>

                  </v-row>
                </v-window-item>

              </v-window>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { getAuth, GoogleAuthProvider,signInWithPopup,FacebookAuthProvider,signInWithEmailAndPassword } from "firebase/auth";
export default{
  data () {
    return {
      user: {   
        email: '',
        password: '',

      },
      show1: false,
      thanks: false,
      dialog: false,
    };
  },
  watch: {
          dialog (val) {
        if (!val) return

        setTimeout(() => (this.thanks=true), 1000)
      },      

      
    },
  methods: {
    redirect(){this.$router.push('home') },
    googleLogin(){
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token);
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    const email = error.customData.email;
    console.log(email);
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential);
    // ...
  });
    },
    facebookLogin(){
      const provider = new FacebookAuthProvider();
      const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    console.log(accessToken);

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    const email = error.customData.email;
    console.log(email);
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    console.log(credential);

    // ...
  });
    },
    userLogin() {
      console.log(this.user.password);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.user.email, this.user.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            this.dialog=true;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
  },
  props: {
    source: String
  }
};
</script>