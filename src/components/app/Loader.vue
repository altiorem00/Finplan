<template>
  <div class="app-loader">
    <div class="loader-ring">
      <div class="loader-ring-light">
        <div class="loader-ring-track"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
$loader-ring-size: 200px;
$loader-ring-border-size: 4px;
.app-loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--vs-theme-layout);
  z-index: 9999999;
  padding-top: 0px;
}
.relative {
  position: relative;
}

.loader-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: $loader-ring-size/-2 0 0 $loader-ring-size/-2;
  width: $loader-ring-size;
  height: $loader-ring-size;
}

.loader-ring-light {
  width: $loader-ring-size;
  height: $loader-ring-size;
  border-radius: $loader-ring-size;
  box-shadow: 0 $loader-ring-border-size 0 lighten(#26a69a, 10%) inset;
  animation: rotate-360 2s linear infinite;
}

.loader-ring-track {
  position: absolute;
  top: 0;
  left: 0;
  width: $loader-ring-size;
  height: $loader-ring-size;
  border-radius: $loader-ring-size;
  box-shadow: 0 $loader-ring-border-size 0 lighten(#26a69a, 10%) inset;
}

@keyframes rotate-360 {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>