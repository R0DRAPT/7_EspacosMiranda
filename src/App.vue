<template>
  <div id="app">
    <div class="content">
      <!-- <Navbar :logo="logo_src" :alt="app_name" /> -->
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import NavbarAposLogin from './components/ComponentsAposLogin/NavbarAposLogin.vue';
import Footer from './components/Footer.vue'
import Banner from './components/Banner.vue'

export default {
  components: {
    Navbar,
    NavbarAposLogin,
    Footer,
    Banner
  },
  
  data() {
    return  {
      logo_src: "/img/logo.png",
      app_name: "Espaços Miranda" 
    }
  }
}
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .content {
    flex: 1;
    background-color: #222;
  }

  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

</style>
