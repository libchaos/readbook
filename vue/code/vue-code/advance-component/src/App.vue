<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <p>{{selectedComponent}}</p>
                <component :is="selectedComponent">
                    <p>Default content</p>
                </component>
                <!--<appQuote>
                    <h2 slot="title">{{ theTitle }}</h2>
                    <p slot="content">a wonderful quote</p>
                </appQuote>-->
            </div>
        </div>  
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    import Author from './components/Author.vue'
    import New from './components/New.vue'
    export default {
        data() {
            return {
                theTitle: 'The Quete data',
                selectedComponent: 'appQuote',
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New,
        }
    }
</script>

<style>
</style>
