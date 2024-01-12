<template>
    <transition name="modal-animation">
        <div :style="{ display: modalActive ? 'flex' : 'none' }" class="modal" @click="close">
            <transition name="modal-animation-inner">
                <div v-show="modalActive" class="modal-inner" @click.stop>
                    <ModalRegisterContent @close-modal="close" />
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
import ModalRegisterContent from "./ModalRegisterContent.vue";

export default {
props: ["modalActive"],

components: {
    ModalRegisterContent,
},

methods: {
    close() {
        this.$emit('close-modal');
        },
    },
};
</script>

<style>

</style>
