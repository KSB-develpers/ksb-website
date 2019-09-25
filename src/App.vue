<template lang="pug">
#app
    q-layout(view='hhh lpR fFf')
        Header
        .main-content
            router-view
    .space-wide
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Quasar from 'quasar';
// import 'bulma/css/bulma.css';
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
    font-family YuGothic, "ヒラギノ角ゴ ProN W3", "Lucida Grande", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, Verdana, "ＭＳ Ｐゴシック", sans-serif
    background-color #E0E0E0
.space-header-size
    height 70px
.space-wide
    height 100px
.space-small
    height 30px
.main-content
    margin 0 auto
.heading
    font-size 2em
    font-weight bold
    text-align center
.under
    border-bottom solid 4px #141C64
.heading-text
    color #FFFFFF
    font-size 3em
    background #141C64
    font-weight bold
    padding 0.2em
.contents-area
    background-color #FFFFFF
    border-radius 10px
    height auto
    padding 60px 0px 60px 0px
    max-width 100%
</style>
