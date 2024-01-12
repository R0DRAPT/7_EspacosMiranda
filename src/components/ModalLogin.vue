<template>
  <transition name="modal-animation">
    <div :style="{ display: modalActive ? 'flex' : 'none' }" class="modal" @click="close">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner" @click.stop>
          <ModalContent @close-modal="close" />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import ModalContent from './ModalContent.vue';

export default {
  props: ['modalActive'],

  components: {
    ModalContent,
  },

  methods: {
    close() {
      this.$emit('toggle-modal');
    },
    closeLoginModal() {
      this.$emit('close-login-modal');
    },
  },
};
</script>

<style>

/* Animations */

.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-animation-inner-leave-to {
  transform: scale(0.8);
}

/* Main CSS */

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 30%;
    height: 100%;
    /* background-color: rgba(0, 0, 0, 0.5); */
    backdrop-filter: blur(4px);
    z-index: 999; 
}

.modal-inner {
    position: relative;
    width: 40%;
    padding: 20px;
    border-radius: 8px;
    animation: fadeInUp 0.5s ease; 
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>