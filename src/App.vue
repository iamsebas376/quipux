<template>
  <div
    :class="{ 'no-scroll': !isSidebarCollapsed }"
    class="d-flex flex-column min-vh-100"
  >
    <Sidebar
      :isSidebarCollapsed="isSidebarCollapsed"
      :toggleSidebar="toggleSidebar"
    />

    <div
      :class="{ expanded: !isSidebarCollapsed }"
      class="flex-grow-1"
      :style="{ marginLeft: isSidebarCollapsed ? '60px' : '250px' }"
    >
      <AppHeader />
      <main class="p-3">
        <router-view></router-view>
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import AppHeader from "./components/Header.vue";
import AppFooter from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      isSidebarCollapsed: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
      if (this.isSidebarCollapsed) {
        document.body.classList.remove("no-scroll");
      } else {
        document.body.classList.add("no-scroll");
      }
    },
  },
};
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
@import "bootstrap-icons/font/bootstrap-icons.css";

.sidebar {
  height: 100vh;
  position: fixed;
  background-color: var(--sidebar-color);
  transition: width 0.3s ease;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100% !important;
    height: 100vh;
  }
}

.no-scroll {
  overflow: hidden;
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
}

.sidebar-menu h6 {
  margin: 1rem 0;
  text-transform: uppercase;
}

.sidebar-menu span {
  display: inline;
}

.expanded {
  margin-left: 60px;
}
</style>
