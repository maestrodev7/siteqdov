import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'
import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import { AbTesting } from 'mdue';


// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import vue3GoogleLogin from 'vue3-google-login'

// importer google login 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGRKIMyOXhIOhmqnBddKE6akcaPuYciEg",
  authDomain: "sitelive-20a08.firebaseapp.com",
  projectId: "sitelive-20a08",
  storageBucket: "sitelive-20a08.appspot.com",
  messagingSenderId: "994063410116",
  appId: "1:994063410116:web:6e6cfcc837597663a93a91",
  measurementId: "G-JDD3PK888G"
};

// Initialize Firebase
const dbs= initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(dbs);

const app = createApp(App)
const vuetify = createVuetify({  
    components,
    directives,
    colors,MenuIcon,AbTesting
}) // Replaces new Vuetify(...)
app.use(vuetify)
app.use(dbs)
app.use(db)
app.use(vue3GoogleLogin, {
  clientId: '334631112973-bfm94d82l11aqhad19q0dnptt0n7c88n.apps.googleusercontent.com'
})
app.use(MenuIcon)
app.use(AbTesting)
app.use(router)
app.mount('#app')
