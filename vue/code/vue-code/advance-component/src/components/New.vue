<template>
  <div class="container">
    <h1>New</h1>
    <button @click="counter++">Increase!</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  destroyed() {
    console.log('destroyed!!!!');
  }
}
</script>

<style scoped>

</style>