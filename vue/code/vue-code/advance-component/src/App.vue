<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <appQuote>
                    <h2>The Quote</h2>
                    <p>a wonderful quote</p>
                </appQuote>
            </div>
        </div>  
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    export default {
       components: {
           appQuote: Quote,
       } 
    }
</script>

<style>
</style>
