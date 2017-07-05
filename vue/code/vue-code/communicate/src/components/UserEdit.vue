<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Change {{userAge}}</p>
        <button @click="editAge">Change age</button>
        <button @click="changeAge">Event Bus Change</button>
    </div>
</template>

<script>
    import { eventBus } from '../main.js'
    export default {
        props: ['userAge'],
        methods: {
            editAge() {
                this.userAge = 30
                this.$emit('ageWasEdited', this.userAge)
            },
            changeAge() {
                this.userAge = 29
                eventBus.$emit('ageBusChange', this.userAge)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
