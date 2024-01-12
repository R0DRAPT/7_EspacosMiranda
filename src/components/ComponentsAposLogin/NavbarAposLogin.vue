<template>
  <div>
    <div id="nav">
      <router-link id="logo-url" to="/"><img id="logo" :src="logo" :alt="alt"></router-link>
      <router-link to="/" class="size" @click="resetPage">Página Principal</router-link>
      <router-link to="/Contactos" class="size">Contactos</router-link>

      <!-- Dropdown menu -->
      <div class="dropdown">
        <a class="size" @click="toggleDropdown">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </a>
        <div v-show="showDropdown" class="dropdown-content" @click="hideDropdown">
          <p>Definições</p>
          <p @click="logout">Logout</p>
        </div>
      </div>
      <!-- Fim do dropdown menu -->
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarAposLogin",
  props: ["logo", "alt"],
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    resetPage() {
      setTimeout(() => {
        window.location.reload();
      }, 1);
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    hideDropdown() {
      this.showDropdown = true;
    },
    logout() {
      this.$router.push("/");
      toastr.warning("Logout com sucesso!", "Cuidado", {
        closeButton: true,
        positionClass: "toast-bottom-right",
        progressBar: true,
        timeOut: 5000,
        extendedTimeOut: 1000,
        preventDuplicates: true,
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
        toastClass: "toast-warning",
      });
    },
  },
};
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
  transition: 0.5s;
}

#nav a:hover {
  color: #b49660 !important;
}

.size {
  font-size: 20px;
}

/* Estilo do dropdown */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background: #b49760d5;
  color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 100%;
  left: auto;
  right: 0;
  cursor: pointer;
  /* Estilos Caixa Dropdown */
  border-radius: 5px;
  padding: 5px;
}

.dropdown .dropdown-content {
  display: block;
}

.dropdown-content p {
  font-size: 20px;
  margin: 0;
  text-align: center;
  padding: 10px; 
}
</style>
