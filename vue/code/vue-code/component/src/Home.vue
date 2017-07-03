<template>
  <div>
    <p>Server status: {{status}}</p>
    <hr>
    <button @click="changeStatus">Change</button>
  </div>
</template>

<script>
export default {
  name: 'name',
  data: function () {	
    return {
      status: 'Critical',
    }
  },
  methods: {
    changeStatus() {
      if (this.status === 'Critical') {
        this.status = 'Nomal'
      } else {
        this.status = 'Critical'
      }
    }
  }
}
</script>

<style scoped>

</style>