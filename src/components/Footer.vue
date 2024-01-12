<template>
  <footer id="footer" :style="customStyle" class="footer-container">
    <p>We Design Dreams &copy; 2023</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    customStyle: String,
  },
};
</script>

<style scoped>
.footer-container {
  position: relative;
  bottom: 0;
  height: 100px;
  background-color: #222;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
