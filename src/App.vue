<template>
<div >
<NavBar/>
<router-view></router-view>
<Footer/>
</div>


</template>

<script>
import NavBar from './views/NavBarView.vue'
import Footer from './views/FooterView.vue'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
