<template>
  <footer class="footer bg-light p-3">
    <div class="container text-center">
      <img :src="logo3" alt="Quipux Logo" style="width: 100px" />
    </div>
  </footer>
</template>

<script>
import logo3 from "../assets/logo-3.png";

export default {
  name: "AppFooter",
  data() {
    return {
      logo3,
    };
  },
};
</script>
