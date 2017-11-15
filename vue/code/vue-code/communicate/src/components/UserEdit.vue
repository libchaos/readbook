<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>Change {{ userAge }}</p>
    <button @click="editAge">Change age</button>
    <button @click="changeAge">Event Bus Change</button>

    <app-user-detail :myName="name" @nameWasReset="name=$event" :resetFn="resetName" :userAge="age"></app-user-detail>
  </div>
</template>

<script>
  import {
    eventBus
  } from '../main.js'
  import UserDetail from './UserDetail.vue'
  export default {
    data() {
      return {
         name: 'Max',
         age: 27,
      }
    },
    props: ['userAge'],
    methods: {
      editAge() {
        this.userAge = 30
        this.$emit('ageWasEdited', this.userAge)
      },
      changeAge() {
        this.userAge = 29
        // eventBus.$emit('ageBusChange', this.userAge)
        eventBus.changeAge(this.userAge)
      }
    },
    beforeDestroy() {
      console.log('before  ', this)
    },
    destroyed() {
   
      console.log(this)
    },
    components: {
      appUserDetail: UserDetail
    }
  }
</script>

<style scoped>
  div {
    background-color: lightgreen;
  }
</style>