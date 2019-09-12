<template lang="pug">
#header
    q-header(reveal :reveal-offset="500")
        .navbar-parent
            .navbar
                a(href='#')
                    img(:src="headerLogo")
                .nav-item
                    q-btn(flat to='#' size='1.2rem').item-style ホーム
                    q-btn(flat to='#' size='1.2rem').item-style お知らせ
                    q-btn(flat to='#' size='1.2rem').item-style 会社概要
                    q-btn(flat to='#' size='1.2rem').item-style 事業内容
                    q-btn(flat to='#' size='1.2rem').item-style 採用情報
                    q-btn(flat to='#' size='1.2rem').item-style お問い合わせ

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component

export default class Header extends Vue {
    private headerLogo = require('@/assets/navbar-logo.png');
}
</script>

<style lang="stylus">
.navbar-parent
    max-width 100%
    height 70px
    background-color #141C64
.navbar
    max-width 1000px
    height  100%
    margin 0 auto
    display flex
.nav-item
    margin-left auto
.item-style
    height: 100%
</style>
