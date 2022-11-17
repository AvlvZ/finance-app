<template>
  <div class="app">
    <v-header/>
    <router-view>

    </router-view>
  </div>
</template>

<script>
import VHeader from "@/components/v-header";

export default {
  name: 'App',
  components: {VHeader},
}
</script>

<style lang="scss">
.app {
  height: 100vh;
  background: linear-gradient(129.74deg, #2A46FF 0%, #743BFC 47.29%, #C72FF8 100%);
  color: #fff;
  overflow: hidden;
}
</style>
