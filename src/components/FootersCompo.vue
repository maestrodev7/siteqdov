<template>
  <v-app>
    <v-footer
      color="primary"
      dark
    >
      <v-row
        justify="center"
        class="my-4 text-center"
      >
        <v-col cols="12" >
          <v-btn
            
            v-for="link in links"
            :key="link.title"
            :to="{  name: `${link.name}`}"
            dark
            >{{ link.title }}
          </v-btn>
        </v-col>
        <v-col cols="12">&copy; 2022 Coding Beauty</v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data: () => {
    return { 
        links: [
            {
              title: 'Home',
              name: 'home'
            }, 
            {
              title: 'Sing In',
              name: 'loginUser'
            }, 
            {
              title: 'Sing Up',
              name: 'signupUser'
            },
               ],
                 icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
        'mdi-youtube',
      ] 
            };
  },
};
</script>