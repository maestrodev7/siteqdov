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
import { createGtm } from '@gtm-support/vue-gtm';

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
  clientId: '343595194587-dr5j53r1c5oau0p9skut7mtq8cfskhna.apps.googleusercontent.com'
})
app.use(
  createGtm({
    id: "GTM-NMR84TD", // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']

    defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
    compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
    enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
    debug: true, // Whether or not display console logs debugs (optional)
    loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
    vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  })
)
app.use(MenuIcon)
app.use(AbTesting)
app.use(router)
app.mount('#app')
