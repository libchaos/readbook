<template>
    <div class="container">
        <app-quote-grid :quotes="quotes"></app-quote-grid>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue'
    export default {
        data() {
            return {
                  quotes: [
                    'just a quote to see someting',
                    '我来学习下'
                ],
                maxQuotes: 10
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
        }

      
    }
</script>

<style>
</style>
