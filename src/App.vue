<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <component :is="layout">
        <router-view />
      </component>
    </transition>
  </div>
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout";
import MainLayout from "@/layouts/MainLayout";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
  components: {
    EmptyLayout,
    MainLayout,
  },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
body {
  background: var(--vs-theme-bg2);
}
:root {
  --vs-primary: 26, 92, 255;
  --vs-theme-bg: #f4f7f8;
  --vs-theme-color: #2c3e50;
  --vs-theme-layout: #fff;
  --vs-theme-bg2: #eef2f5;
  --vs-theme-code: #3f3d56;
  --vs-theme-code2: #363449;
}
[vs-theme="dark"] {
  --vs-theme-bg: #18191c;
  --vs-theme-color: #fff;
  --vs-theme-layout: #1e2023;
  --vs-theme-bg2: #141417;
  --vs-theme-code: #141417;
  --vs-theme-code2: #161619;
}
[vs-theme="dark"] {
  --vs-background: 30, 32, 35;
  --vs-text: 255, 255, 255;
  --vs-gray-1: 24, 25, 28;
  --vs-gray-2: 20, 20, 23;
  --vs-gray-3: 15, 16, 19;
  --vs-gray-4: 10, 11, 14;
  --vs-shadow-opacity: 0.3;
  --vs-dark: 0, 0, 0;
  --vs-background-opacity: 0.6;
}
</style>
