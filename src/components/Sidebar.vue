<template>
  <nav
    :class="[
      'sidebar text-white d-flex flex-column',
      { collapsed: isSidebarCollapsed },
    ]"
    :style="{ width: isSidebarCollapsed ? '60px' : '250px' }"
  >
    <div class="p-3 d-flex justify-content-between align-items-center">
      <button
        @click="toggleSidebar"
        class="btn btn-link text-white p-0 border-0"
      >
        <i class="bi bi-list fs-4"></i>
      </button>
      <img
        v-if="!isSidebarCollapsed"
        class="logo-text text-white fw-light fs-4"
        :src="logo2"
        alt="Quipux Logo"
        style="width: 100px; height: auto; margin-left: auto"
      />
    </div>
    <div
      v-if="!isSidebarCollapsed"
      class="menu-title px-3 py-2"
      style="color: var(--sidebar-title-color)"
    >
      ENTITIES
    </div>
    <hr
      v-if="!isSidebarCollapsed"
      style="border-color: var(--sidebar-title-color); margin: 0 15px"
    />
    <div class="sidebar-menu flex-grow-1 overflow-auto mt-2">
      <div v-for="section in sections" :key="section.name" class="menu-section">
        <div
          class="menu-item"
          :class="{ active: isActive(section.name) }"
          @click="toggleDropdown(section.name)"
        >
          <div
            class="d-flex align-items-center px-3 py-2 text-white text-decoration-none"
          >
            <router-link
              :to="section.path"
              class="menu-item d-flex align-items-center text-white text-decoration-none"
            >
              <i :class="[section.icon, 'fs-5']" class="text-center w-100"></i>
            </router-link>
            <span v-if="!isSidebarCollapsed" class="menu-text ms-3">{{
              section.name
            }}</span>
            <i
              v-if="!isSidebarCollapsed && section.submenus"
              class="bi bi-chevron-down ms-auto"
              :class="{ 'rotate-180': isDropdownOpen(section.name) }"
            >
            </i>
          </div>
          <div
            v-if="!isSidebarCollapsed && isDropdownOpen(section.name)"
            class="submenu bg-opacity-25"
          >
            <router-link
              v-for="submenu in section.submenus"
              :key="submenu.name"
              :to="submenu.path"
              class="submenu-item d-flex align-items-center text-white text-decoration-none ps-5 py-2"
              @click="closeSidebar"
            >
              <hr class="submenu-separator me-2" />
              <span>{{ submenu.name }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import logo2 from "../assets/logo-2.png";

export default {
  name: "Sidebar",
  props: {
    isSidebarCollapsed: {
      type: Boolean,
      required: true,
    },
    toggleSidebar: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      logo2,
      sections: [
        {
          name: "EMPRESAS",
          path: "/empresas",
          icon: "bi bi-building",
          submenus: [{ name: "Empresas", path: "/empresas" }],
        },
        {
          name: "ARTICULOS",
          path: "/articulos",
          icon: "bi bi-file-text",
          submenus: [{ name: "Artículos", path: "/articulos" }],
        },
        {
          name: "COLABORADORES",
          path: "/colaboradores",
          icon: "bi bi-people",
          submenus: [{ name: "Colaboradores", path: "/colaboradores" }],
        },
      ],
      activeSection: null,
    };
  },
  methods: {
    toggleDropdown(sectionName) {
      if (!this.isSidebarCollapsed) {
        this.activeSection =
          this.activeSection === sectionName ? null : sectionName;
      }
    },
    closeSidebar() {
      if (!this.isSidebarCollapsed && this.isMobile()) {
        this.toggleSidebar();
      }
    },
    isMobile() {
      return window.innerWidth <= 768;
    },
    isDropdownOpen(sectionName) {
      return this.activeSection === sectionName;
    },
    isActive(sectionName) {
      return this.activeSection === sectionName;
    },
  },
};
</script>

<style scoped>
.sidebar {
  height: 100vh;
  position: fixed;
  background-color: var(--sidebar-color) !important;
  transition: all 0.3s ease;
  overflow-x: hidden;
  z-index: 1000;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100% !important;
    height: 100vh;
  }
}

.menu-item {
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.menu-item:hover {
  background-color: var(--sidebar-btn-hover-color) !important;

  .menu-text {
    color: var(--sidebar-btn-text-hover-color) !important;
  }
}

.menu-item.active {
  background-color: var(--sidebar-btn-hover-color) !important;

  .menu-text {
    color: var(--sidebar-btn-text-hover-color) !important;
  }
}

.rotate-180 {
  transform: rotate(180deg);
}

.collapsed {
  width: 60px !important;
}

:deep(.main-content) {
  margin-left: v-bind('isSidebarCollapsed ? "60px" : "250px"');
  transition: margin-left 0.3s ease;
}

.submenu-title {
  font-weight: bold;
  font-size: 0.9rem;
}

hr {
  border: none;
  height: 1.5px;
  background-color: var(--gray-color);
}

.submenu-separator {
  border: none;
  height: 1px;
  background-color: var(--gray-color);
  width: 20px;
  margin-right: 10px;
}
</style>
