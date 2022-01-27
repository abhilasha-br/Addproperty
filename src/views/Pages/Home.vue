<template>
  <div class="page">
    <div class="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
    <the-sidebar />
    <div class="main-content app-content">
      <the-header />
      <div class="jumps-prevent" style="padding-top: 63px;"></div>
      <div class="container-fluid mb-4">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "../../components/TheHeader.vue";
import TheSidebar from '../../components/TheSidebar.vue';
export default {
  name: "Home",
  components: { TheHeader, TheSidebar },
};
</script>
