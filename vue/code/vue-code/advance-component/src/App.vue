<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <appQuote>
                    <h2 slot="title">{{ theTitle }}</h2>
                    <p slot="content">a wonderful quote</p>
                </appQuote>
            </div>
        </div>  
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    export default {
        data() {
            return {
                theTitle: 'The Quete data',
            }
        },
        components: {
            appQuote: Quote,
        }
    }
</script>

<style>
</style>
