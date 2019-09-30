<template lang="pug">
#About
    .parallax-parent
        q-parallax(:src='keyVisual' :height='400')
            h1.heading-text 会社概要
    .sub-navbar
        router-link.nev-text(to='/about' exact-active-class='active') 会社概要
        router-link.nav-text(to='about/philosophy' exact-active-class='active') 企業理念・経営理念
        router-link.nev-text(to='/contact' exact-active-class='active') 代表メッセージ
    .space-wide
    .main-contents
        router-view/

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class About extends Vue {
    private keyVisual = require('@/assets/sendai-keyV.jpeg');
}
</script>

<style lang="stylus" scoped>
.parallax-parent
    max-width 1024px
    margin 0 auto
.sub-navbar
    height 40px
    background-color #70C8E4
    display flex
    align-items center
    justify-content center
.nav-text
    color #FFFFFF
    font-size 15px
    font-weight bold
    margin 0
    padding-right 50px
    padding-left 50px
.main-contents
    max-width 1024px
    margin 0 auto
a
    text-decoration none
    font-size 18px
    color #FFFFFF
    font-weight bold
.active
    color #141C64
    font-weight bold
@media screen and (max-width 610px)
    .sub-navbar
        display none
</style>
