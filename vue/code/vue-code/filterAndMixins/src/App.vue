<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUpperCaseV | to-lowercase}}</p>
        <hr>
        <input type="text" v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
        </ul>
      </div>
      <app-list></app-list>
    </div>
  </div>
</template>

<script>
  import List from './List.vue'
  import {fruitMixin} from './fruitMixins'
  export default {
    mixins: [fruitMixin],
    data() {
      return {
        text: 'Hello there',
      }
    },
    filters: {
      toUpperCaseV(value) {
        return value.toUpperCase()
      }
    },
    components: {
      appList: List,
    },
    created() {
      console.log('inside app created');
    }
  }
</script>

<style>

</style>