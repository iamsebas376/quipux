<template>
  <header
    class="d-flex align-items-center justify-content-between p-3"
    style="color: var(--gray-color); background-color: var(--card-color)"
  >
    <div
      class="px-3 justify-content-center"
      style="font-size: 16px; letter-spacing: 0.5px; font-weight: 500"
    >
      <i class="bi bi-house" style="color: inherit"></i>
      <span style="margin: 0 10px">/</span>
      <span>EMPRESAS</span>
      <span style="margin: 0 10px">/</span>
      <span
        class="current-route"
        style="
          color: var(--highlight-color);
          border-bottom: 3px solid var(--highlight-color);
        "
        >{{ currentRoute }}</span
      >
    </div>
    <div
      class="user-profile d-flex align-items-center justify-content-center ms-auto"
    >
      <div
        class="user-icon rounded-circle text-center p-2 d-flex align-items-center justify-content-center"
        style="width: 40px; height: 40px; background-color: #f8f9fa"
      >
        <i class="bi bi-person-fill" style="font-size: 20px"></i>
      </div>
      <div class="dropdown">
        <button
          class="btn dropdown-toggle"
          style="
            font-weight: 500;
            cursor: pointer;
            text-align: center;
            width: 100%;
          "
        >
          Usuario Apellido
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  computed: {
    currentRoute() {
      return this.$route.name?.toUpperCase() || "";
    },
  },
};
</script>

<style scoped>
@import "bootstrap-icons/font/bootstrap-icons.css";

@media (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: center;
  }

  .user-profile {
    margin-top: 10px;
    width: 100%;
    text-align: center;
  }
}
</style>
