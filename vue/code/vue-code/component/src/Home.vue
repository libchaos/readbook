<template>
  <div>
    <server-head></server-head>
    <app-server-status v-for="server in 5" :key="server"></app-server-status>
    <br>
    <br>
    <br>
    <server-footer></server-footer>
  </div>
</template>

<script>
import Header from './components/share/Header.vue';
import Footer from './components/share/Footer.vue';
import ServerStatus from './ServerStatus.vue';
export default {
  components: {
    appServerStatus: ServerStatus,
    serverHead: Header,
    serverFooter: Footer,
  }
}
</script>

<style scoped>

</style>