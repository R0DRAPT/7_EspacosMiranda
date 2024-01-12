<template>
  <div class="modal-content">
    <button @click="closeModal" class="close-button">&times;</button>

    <h3 style="color: #b49660;"><strong>REGISTAR</strong></h3>

    <br>

    <form @submit.prevent="register" class="register-form">

      
      <div class="mb-3" style="font-family:Verdana">
        <!-- Email -->
        <div :class="[emailErrorClass]" class="error-container">
          <input type="text" class="form-control" id="email" placeholder="Email" v-model="email" required>
        </div>
        <!-- erro email sem "@" -->
        <div v-if="emailValidationFailed" class="error-message">O email tem que conter "@".</div>
      </div>

      <div style="margin: 2px;"></div>

      <div class="mb-3" style="font-family:Verdana">
        <!-- Utilizador -->
        <input type="text" class="form-control" id="username" placeholder="Nome de Utilizador" v-model="username" required>
      </div>

      <div style="margin: 2px;"></div>

      <div class="mb-3" style="font-family:Verdana">
        <!-- Password -->
        <div :class="[passwordErrorClass]" class="error-container">
          <div class="password-container">
            <input :type="showPassword ? 'text' : 'password'" class="form-control" id="password" placeholder="Password" v-model="password" required>
            <span class="eye-icon" @click="togglePasswordVisibility">&#128065;</span>
          </div>
        </div>
      </div>

      <div class="mb-3" style="font-family:Verdana">
        <!-- Confirm Password -->
        <div :class="[passwordErrorClass]" class="error-container">
        <div class="password-container">
          <input :type="showConfirmPassword ? 'text' : 'password'" class="form-control" id="confirm_password" placeholder="Confirmar Password" v-model="confirm_password" required>
          <span class="eye-icon" @click="toggleConfirmPasswordVisibility">&#128065;</span>
        </div>
      </div>
        <!-- Mensagem de erro para senhas diferentes -->
        <div v-if="passwordsNotEqual" :class="['error-message', passwordsNotEqualClass]">As senhas não são iguais.</div>
      </div>

      <br>

      <div>
        <button type="submit" class="btn register-button-container">REGISTAR</button>
      </div>

      <br>
    </form>

    <div class="login-container">
      Já tem conta? <router-link to="/" @click="goToLogin" class="login-link">Login</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ModalRegisterContent",

  data() {
    return {
      email: "",
      username: "",
      password: "",
      confirm_password: "",
      passwordsNotEqual: false,
      emailValidationFailed: false,
      emailErrorClass: "",
      showPassword: false,
      showConfirmPassword: false,

      showLoginModal: false,
    };
  },
  methods: {

    async register() {
      // Validar o email
        if (!this.email.includes("@")) {
          this.emailValidationFailed = true;

          // Adiciona temporariamente a classe para acionar a animação
          this.emailErrorClass = "error-border";

          setTimeout(() => {
            // Remove a classe após a conclusão da animação (após 0.5 segundos)
            setTimeout(() => {
              this.emailValidationFailed = false;
              this.emailErrorClass = ""; // Remover a classe de erro após a animação
            }, 500);
          }, 4000);

          return;
        } else {
          this.emailValidationFailed = false;
          this.emailErrorClass = "";
        }

      // Senhas iguais
      if (this.password !== this.confirm_password) {
        this.passwordsNotEqual = true;

        // Adiciona temporariamente a classe para acionar a animação
        this.passwordErrorClass = 'error-border';

        setTimeout(() => {

          // Remove a classe após a conclusão da animação (após 0.5 segundos)
          setTimeout(() => {
            this.passwordsNotEqual = false;
            this.passwordsNotEqualClass = '';
            this.passwordErrorClass = ''; // Remover a classe de erro após a animação
          }, 500);
        }, 4000);

        return;
      } else {
        this.passwordsNotEqual = false;
      }

      // Ligar a BD
       
      let result = await axios.post("http://localhost:3000/users",{
          email:this.email,
          username:this.username,
          password:this.password,
        });

        console.warn(result);
        
        if(result.status==201)
        { 
            toastr.success("Deia Login para Continuar", "Sucesso", {
              closeButton: true,
              positionClass: "toast-bottom-right",
              progressBar: true,
              timeOut: 5000,
              extendedTimeOut: 1000,
              preventDuplicates: true,
              showMethod: "fadeIn",
              hideMethod: "fadeOut",
              toastClass: "toast-success",
            });
          
            this.$emit('close-modal');
            localStorage.setItem("Register-Info",JSON.stringify(result.data))
            
        } else {
          //Erro Registar
          toastr.error("Erro ao registar.", "Erro!", {
            closeButton: true,
            positionClass: "toast-bottom-right",
            progressBar: true,
            timeOut: 5000,
            extendedTimeOut: 1000,
            preventDuplicates: true,
            showMethod: "fadeIn",
            hideMethod: "fadeOut",
            toastClass: "toast-error",
          });
        }

        // Limpar
        this.email = "";
        this.username = "";
        this.password = "";
        this.confirm_password = "";
          
      
    },

    closeModal() {
      this.$emit('close-modal');
    },

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      const passwordInput = document.getElementById('password');
      if (this.showPassword) {
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }
    },

    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
      const passwordInput = document.getElementById('confirm_password');
      if (this.showConfirmPassword) {
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }
    },

    goToLogin() {
      this.closeModal();
    }
  },
};
</script>

<style scoped>
.modal-content {
  padding: 20px;
  position: relative;
}

.register-form {
  display: flex;
  flex-direction: column;
}

.register-button-container {
  color: white;
  background-color: #b49660; 
  width: 100%;
  transition: background-color 0.4s ease; 
}

.register-button-container:hover {
  background-color: #222;
  color: #b49660;
}

.form-control::placeholder {
  color: #979494b9;
  font-size: 14px;
}

.login-container {
  font-family: Verdana;
  color: #b49660;
  text-align: center;
}

.login-link {
  color: #b49660;
  transition: color 0.3s ease;
}

.login-link:hover {
  color: #222;
}

.close-button {
  position: absolute;
  top: -5px;
  right: 15px;
  font-size: 40px;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: #b49660;
}

.password-container {
  position: relative;
}

.eye-icon {
  position: absolute;
  top: 54%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  user-select: none;
  font-size: 25px;
}

/* Error CSS */

.error-border {
  border: 1px solid rgba(255, 0, 0, 0.603);
  border-radius: 8px;
  animation: fadeOutBorder 0.3s ease-out 4s forwards;
  animation: fadeOutEmailBorder 0.3s ease-out 4s forwards;
}

/* Adicionando uma animação ao error-message */
.error-message {
  color: rgba(255, 0, 0, 0.603);
  font-size: 14px;
  opacity: 1;
  animation: fadeOutMessage 0.3s ease-out 4s forwards;
}

/* Animação Desaparece */
/* error-border */
@keyframes fadeOutBorder {
  from {
    border: 1px solid rgba(255, 0, 0, 0.603);
  }
  to {
    border: 1px solid rgba(255, 0, 0, 0); /* Altere a opacidade desejada no estado final */
  }
}

/* error-message */
@keyframes fadeOutMessage {
  from {
    opacity: 1;
  }
  to {
    opacity: 0; 
  }
}

@keyframes fadeOutEmailBorder {
  from {
    border: 1px solid rgba(255, 0, 0, 0.603);
  }
  to {
    border: 1px solid rgba(255, 0, 0, 0); /* Altere a opacidade desejada no estado final */
  }
}
</style>