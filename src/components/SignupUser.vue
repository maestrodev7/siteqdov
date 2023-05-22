<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12 zindex">
              <v-window >
                <v-window-item >
                  <v-row class="fill-height">
                

                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>  
                              <h3 class="text-center display-2 teal--text text--accent-3">
                                Create Account
                              </h3>
                            </v-toolbar-title>
                        </v-toolbar>

                        <div class="text-center mt-4">
                          <GoogleLogin :callback="callback" cc/>
                          <v-facebook-login @sdk-init="handleSdkInit" app-id="876393646978646"></v-facebook-login>
                          <v-btn class="mx-2" fab color="info" outlined>
                            <v-icon>mdi-linkedin</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">Ensure your email for registration</h4>
                        <v-form @submit.prevent="onSubmit " v-model="form">

                              <v-alert v-if="formerror"
                              dense
                              outlined
                              type="error"
                            >
                              {{ formerror }}
                            </v-alert>
                        <v-row>
                          
                          <v-col
                            cols="12"
                            md="4"
                          >
                              
                            <v-text-field
                              label="FirstName"
                              name="firstName"
                              v-model="firstName"
                              :rules="nameRules"
                              :counter="10"
                              required
                              prepend-icon="mdi-account"
                              type="text"
                              color="teal accent-3"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            md="4"
                          >
                            <v-text-field
                              label="LastName"
                              name="lastName"
                              v-model="lastName"
                              :rules="nameRules"
                              :counter="10"
                               prepend-icon="mdi-account"
                              type="text"
                              color="teal accent-3"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            md="4"
                          >                          
                            <v-text-field
                              label="Email"
                              name="email"
                              v-model="email"
                              
                              :rules="emailRules"
                              required
                              prepend-icon="mdi-email"
                              type="text"
                              color="teal accent-3"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            md="4"
                          >                     
                            <v-select
                              prepend-icon="mdi-ski-cross-country"
                              :items="itemCountry"
                              :item-value="(item) =>item"
                              v-model="country"
                              :item-title="(item) =>item.flag+ item.name"
                             return-object
                              :rules="countryRules"
                              required
                              label="Country"
                            >  
 
                                                  </v-select>
                          </v-col>
                          <v-col
                            cols="12"
                            md="4"
                          >                          
                      <v-text-field
                        ref="city"
                          prepend-icon="mdi-city"
                        v-model="city"
                        :rules="cityRules"
                        label="City"
                        placeholder="City"
                        required
                      ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            md="4"
                          >                          
                            <v-text-field
                              id="phone"
                              label="phone"
                              name="phone"
                                :rules="phoneRules"
                              v-model="phone"
                              prepend-icon="mdi-phone"
                              type="number"
                              color="teal accent-3"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >    
                          <v-text-field
                            ref="address"
                              prepend-icon="mdi-map-marker-outline"
                            v-model="address"
                            :rules="addressRules"
                            label="Address Line"
                            placeholder="your location"
                            counter="25"
                            required
                          ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >  
                            <v-text-field
                              ref="zip"
                                prepend-icon="mdi-folder-zip-outline"
                              v-model="zip"
                              label="ZIP / Postal Code"
                              required
                              placeholder="79938"
                            ></v-text-field>                          
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >
                           <v-text-field 
                           v-model="password" 
                           :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                           :rules="[rules.required, rules.min]" 
                           :type="show1 ? 'text' : 'password'" 
                           name="password" 
                           label="Password" 
                           hint="At least 8 characters" 
                           color="teal accent-3"
                           counter @click:append="show1 = !show1">

                           </v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >
                          <v-text-field 
                          block v-model="verify" 
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                          :rules="[rules.required, passwordMatch]" 
                          :type="show1 ? 'text' : 'password'" 
                          name="verify" 
                          label="Confirm Password" 
                          color="teal accent-3"
                          counter @click:append="show1 = !show1">

                          </v-text-field>
                          </v-col>
                              
                         
                        </v-row>
                          <v-spacer></v-spacer>
                      <div class="text-center mt-n5">
                       <v-btn
                       
                      :disabled="dialog"
                      :loading="dialog"
                      rounded outlined dark 
                      type="submit"
                      
                    >
                     Sign in
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
            >    Information save succesfully</v-toolbar>
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

<script >
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {getFirestore,collection, addDoc } from "firebase/firestore";
import VFacebookLogin from 'vue-facebook-login-component-next'
import jwt_decode from "jwt-decode";
//import { db } from "../main.js"
import { Country }  from 'country-state-city';
console.log(Country.getAllCountries())
export default {
     components : {
      VFacebookLogin, 

    },


  data () {

       return { 
        callback: (response) => {
        console.log("Handle the response credential",response)
        let responsepayloard = jwt_decode(response.credential);
        
        console.log("Email : " + responsepayloard.email);
        console.log("Family Name : " +responsepayloard.family_name);
        console.log("Pseudo : " + responsepayloard.given_name);
        console.log("URL : " + responsepayloard.picture);
        console.log("Name : " + responsepayloard.name);
      },
           country: [{name: 'select country', isoCode: '', flag: '', phonecode: '', currency: ''}],
           valid: false,
      itemCountry: Country.getAllCountries(),
      FB: {},
     
      scope: {},
    
     formerror:"",
     formsucces:"",
      thanks: false,
      dialog: false,
      loader: null,
      loading: false,
      
    firstName: "",
    lastName: "",
          nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
    email: "",
          emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    password: "",
  
    countryRules: [
        v => !!v || 'Name is required',
      ],
    city: "",
    cityRules: [
        v => !!v || 'Name is required',
      ],
      phone:null,
      phoneRules: [
        v => !!v || 'Name is required',
      ],
    verify: "",
    loginPassword: "",
    loginEmail: "",
    loginEmailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    address: null,
    addressRules: [
          v => !!v || 'Name is required',
        v => v.length <= 25 || 'Name must be less than 25 characters',
              ],
      zip: null,
    show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 8) || "Min 8 characters"
    }
      }
      
  },
    watch: {
          dialog (val) {
        if (!val) return

        setTimeout(() => (this.thanks=true), 1000)
      },      

      
    },
    computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  
  methods: {

    async handleSignOut() {
      try {
        await this.$gAuth.signOut();
        // console.log(this.$gAuth.signOut);

        this.user = '';
      } catch (error) {
        console.log(error);
      }
    },
    redirect(){this.$router.push('home') },
    handleSdkInit({ FB, scope }) {
        this.FB = FB
        this.scope = scope
      },
    
        async  onSubmit() {
            const docData = {
                  firstName: this.firstName,
                  lastName: this.lastName,
                  email: this.email,
                  country: this.country.name,
                  city: this.city,
                  phone: this.phone,
                  zip: this.zip,
                  address: this.address
              };
              console.log(docData );
         const auth = getAuth();
          createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
                                try{
                
              const db = getFirestore();
              console.log(docData);
              const docRef =  addDoc(collection(db, "Users"),docData);
              console.log("Document written with ID: ", docRef.id);
              this.formsucces="information save succesfully"
              this.dialog=true;
              } catch (e) {
                console.error("Error adding document: ", e);
              }

              // ...
            })
            .catch((error) => {
            //  this.overlay=true;
              
              const errorCode = error.code;
              console.log(errorCode);
             
              
              switch (errorCode) {
                case 'auth/email-already-exists':
                  this.formerror='email already exists';
                  break;
              
                case 'auth/invalid-argument':
                this.formerror='invalid argument';
                  break;

                case 'auth/invalid-email':
                this.formerror='invalid email';
                  break;

                case 'auth/phone-number-already-exists':
                this.formerror='phone number already exists';
                break;
                default:
               
              }
             
              // ..
            });

     


    },
    validate() {
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  },
  props: {
    source: String
  },


};
</script>
<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
    
  }
  .zindex {

}
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>