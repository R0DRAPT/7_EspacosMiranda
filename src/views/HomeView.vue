<template>
  <Navbar :logo="logo_src" :alt="app_name" />
  <Banner />
  <section class="main-container" style="background-color: #b49660; padding:20px; font-size: 18px; margin-right: 300px;">
    <h4 class="spacebetween" style="font-family: 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"><b>We Design Dreams</b></h4>
    <p class="spacebetween" style="font-family: verdana" >──────</p>
    <p class="spacebetween"><b style="font-family: 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">Damos forma aos seus sonhos.</b></p>
    <p class="spacebetween" style="font-family: 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">Com inovação, qualidade e rigor, apoiados em anos de experiência.</p>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Banner from "../components/Banner.vue"

export default {
  name: "Home",

  components: {
    Banner,
    Navbar,
  },
  
  data() {
    return  {
      logo_src: "/img/logo.png",
      app_name: "Espaços Miranda" 
    }
  }
}

</script>

<style scoped>
@import 'bootstrap/dist/css/bootstrap.min.css';

  h4 {
    margin-left: 430px;
    text-align: left;
    font-size: 24px;
    color: #2b2a2a !important;
  }

  p {
    margin-left: 430px;
    font-size: 20px;
  }
  .spacebetween {
    margin-bottom: -1px;
  }
</style>
