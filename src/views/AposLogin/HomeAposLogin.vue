<template>
  <div>
    <NavbarAposLogin :logo="logo_src" :alt="app_name" />
    <Banner />
    <section class="main-container" style="background-color: #b49660; padding:20px; font-size: 18px; margin-right: 300px;">
      <h4 class="spacebetween" style="font-family: 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">Bem Vindo <b>{{ username }}</b></h4>
      <p class="spacebetween paragrafo-main" style="font-family: verdana" >──────</p>
      <p class="spacebetween paragrafo-main"><b style="font-family: 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">Agora já pode ver os nossos artigos</b></p>
      <p class="spacebetween paragrafo-main" style="font-family: 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">Se ver algum artigo que goste pode adicionar ao seu carrinho.</p>
      <p class="spacebetween paragrafo-main" style="font-family: 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">(Mudar Isto depois)</p>
    </section>
    
    <!-- Row 1 -->
    <section style="color: white; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; margin-top: 30px; "> 
      <!-- SOFÁS -->
      <div class="hover-box" @mouseover="showProductName('SOFÁS', $event)" @mouseleave="hideProductName($event)">
        <img src="/img/Catalogo/Sofas.png" alt="SOFÁS">
        <p class="product-name">SOFÁS</p>
      </div>
      <!-- CADEIRÕES -->
      <div class="hover-box" @mouseover="showProductName('CADEIRÕES', $event)" @mouseleave="hideProductName($event)">
        <img src="/img/Catalogo/Cadeiroes.png" alt="CADEIRÕES">
        <p class="product-name">CADEIRÕES</p>
      </div>
      <!-- CONSOLAS -->
      <div class="hover-box" @mouseover="showProductName('CONSOLAS', $event)" @mouseleave="hideProductName($event)">
        <img src="/img/Catalogo/Consolas.png" alt="CONSOLAS">
        <p class="product-name">CONSOLAS</p>
      </div>
    </section>

    <!-- Row 2 -->
    <section style="color: white; display: flex; flex-wrap: wrap; justify-content: center; align-items: center;">  
      <!-- PECAS DE DECORAÇÃO -->
      <div class="hover-box" @mouseover="showProductName('PECAS DE DECORAÇÃO', $event)" @mouseleave="hideProductName($event)">
        <img src="/img/Catalogo/PecasDecoracao.png" alt="PECAS DE DECORAÇÃO">
        <p class="product-name">PECAS DE DECORAÇÃO</p>
      </div>
      <!-- CADEIRAS -->
      <div class="hover-box" @mouseover="showProductName('CADEIRAS', $event)" @mouseleave="hideProductName($event)">
        <img src="/img/Catalogo/Cadeiras.png" alt="CADEIRAS">
        <p class="product-name">CADEIRAS</p>
      </div>
      <!-- BANQUETAS -->
      <div class="hover-box" @mouseover="showProductName('BANQUETAS', $event)" @mouseleave="hideProductName($event)">
        <img src="/img/Catalogo/Banquetas.png" alt="BANQUETAS">
        <p class="product-name">BANQUETAS</p>
      </div>
    </section>

    <!-- Row 3 -->
    <section style="color: white; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; margin-bottom: 30px;">
      <!-- MESAS DE CABECEIRA -->
      <div class="hover-box" @mouseover="showProductName('MESAS DE CABECEIRA', $event)" @mouseleave="hideProductName($event)">
        <img src="/img/Catalogo/MesasCabeceira.png" alt="MESAS DE CABECEIRA">
        <p class="product-name">MESAS DE CABECEIRA</p>
      </div>
      <!-- CAMAS -->
      <div class="hover-box" @mouseover="showProductName('CAMAS', $event)" @mouseleave="hideProductName($event)">
        <img src="/img/Catalogo/Camas.png" alt="CAMAS">
        <p class="product-name">CAMAS</p>
      </div>
      <!-- CÓMODAS -->
      <div class="hover-box" @mouseover="showProductName('CÓMODAS', $event)" @mouseleave="hideProductName($event)">
        <img src="/img/Catalogo/Comodas.png" alt="CÓMODAS">
        <p class="product-name">CÓMODAS</p>
      </div>
    </section>

  </div>
</template>

<script>
import NavbarAposLogin from '../../components/ComponentsAposLogin/NavbarAposLogin.vue';
import Banner from "../../components/Banner.vue"

export default {
  name: "HomeAposLogin",

  components: {
    NavbarAposLogin,
    Banner,
  },

  data() {
    return {
      username: "",
      logo_src: "/img/logo.png",
      app_name: "Espaços Miranda" 
    };
  },

  mounted() {
    // Recupera Dados no localStorage
    const userData = JSON.parse(localStorage.getItem("Register-Info"));
    if (userData) {
      this.username = userData.username;
    }

    // Evento no Login
    this.username = this.$route.params.username;
  },

  methods: {
    showProductName(name, event) {
      const hoverBox = event.currentTarget;
      const productNameElement = hoverBox.querySelector('.product-name');

      if (productNameElement) {
        const boxRect = hoverBox.getBoundingClientRect();
        const centerX = boxRect.width / 2;
        const centerY = boxRect.height / 2;

        productNameElement.style.left = `50%`;
        productNameElement.style.top = `50%`;
        productNameElement.style.transform = `translate(-50%, -50%)`;
        productNameElement.style.opacity = 1;
      }
    },
    
    hideProductName(event) {
      const productNameElement = event.target.querySelector('.product-name');
      if (productNameElement) {
        productNameElement.style.opacity = 0;
      }
    },
  },
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

.paragrafo-main {
  margin-left: 430px;
  font-size: 20px;
}
.spacebetween {
  margin-bottom: -1px;
}

.hover-box {
  position: relative;
  width: 380px;
  height: 280px;
  margin: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.hover-box img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.hover-box:hover img {
  opacity: 0.2;
}

.hover-box:hover {
  background: rgba(67, 64, 52, 0.74);
  cursor: pointer;
}

.product-name {
  position: absolute;
  font-size: 18px;
  color: #b49660;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-family: "Montserrat", sans-serif !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
}
</style>
