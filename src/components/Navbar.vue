<template>
  <div>
    <div id="nav">
      <router-link id="logo-url" to="/">
        <img id="logo" :src="logo" :alt="alt">
      </router-link>
      <router-link to="/" class="size" @click="resetPage">Página Principal</router-link>
      <router-link to="/Contactos" class="size">Contactos</router-link>
      <a href="#" @click="toggleModal" class="size">Login</a>

      <ModalLogin :modalActive="modalActive" @toggle-modal="toggleModal" />
    </div>
  </div>
</template>

<script>
import ModalLogin from './ModalLogin.vue'
import { ref } from 'vue'

export default {
    name: "Navbar",
    props: ["logo", "alt"],
    components: {
      ModalLogin,
    },

    setup() {
      const modalActive = ref(false);

      const toggleModal = () => {
        if (!modalActive.value) {
          console.log('A modal login está aberta');
        } else {
          console.log('A modal login está fechada');
        }
        modalActive.value = !modalActive.value
      }

      const resetPage = () => {
        setTimeout(() => {
          window.location.reload();
        }, 1);
      }

      return { modalActive, toggleModal, resetPage };
    }
}
</script>

<style scoped>
 #nav {
    background-color: #222;
    
    padding: 1px 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  #nav #logo-url {
    margin: auto;
    margin-left: 0;
  }

  #nav a {
    color: white;
    text-decoration: none;
    margin: 30px;
    transition: .5s;
  }

  #nav a:hover {
    color: #b49660 !important;
  }
  .size {
    font-size: 20px;
  }
</style>