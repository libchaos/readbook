<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>Name: {{name}}</p>
        <p>Age: {{age}}</p>
        <input type="text" v-model="name">
        <!--<button @click="changeName(name, $event)">Change my name</button>-->
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :myName="name" @nameWasReset="name=$event" :resetFn="resetName" :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <button @click="show=!show">show</button>
                <app-user-edit :userAge="age" @ageWasEdited="age=$event" v-if="show"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        data() {
            return {
                name: 'Max',
                age: 27,
                show: true
            }
        },
        methods: {
            changeName(name) {
                return this.name = name
            },
            resetName() {
              
                this.name = 'Maxxx'
                this.$destory()
            }
        },
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>