<template>
<div>   
    <p>Counter is: {{ counter }}</p>
    <p>Clicks: {{ stringCounter }}</p>
</div>

</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.getters.doubleCounter
            },
            stringCounter() {
                return this.$store.getters.stringCounter;
            }
        }
    }
</script>