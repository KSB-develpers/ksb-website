<template lang="pug">
#app
    q-layout(view='hhh lpR fFf')
        Header
        .main-content
            .space-header-size
            router-view

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Quasar from 'quasar';
import Header from '@/components/Header.vue';

@Component({
    components: {
        Header,
    },
})

export default class App extends Vue {}
</script>

<style lang="stylus">
#app
    font-family Arial, Helvetica, sans-serif
    background-color #E0E0E0
.space-header-size
    height 70px
.space-wide
    height 100px
.space-small
    height 30px
.main-content
    max-width 1024px
    margin 0 auto
.heading
    font-size 2.5rem
    font-weight bold
    text-align center
.under
    border-bottom solid 4px #141C64
</style>
