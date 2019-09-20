<template lang="pug">
#header
    .mobile-menu(v-if='menuStatus')
        q-toolbar
            q-space/
            q-btn(dense flat round icon='close' @click='menuActive')
        p.floating-menu-title - Menu -
        .floating-menu
            router-link(to='/')
                .menu-panel
                    p ホーム
            router-link(to='/about')
                .menu-panel
                    p 会社概要
            .menu-panel
                p 事業内容
            .menu-panel
                p 採用情報
            .menu-panel
                p お問い合わせ
        .floating-logo
            img(:src="headerLogo" height=90 width=150)
    //- ヘッダーの実装部分
    .desktop-header
        q-header(reveal :reveal-offset="100")
            .navbar-parent
                .navbar
                    router-link(to='/' tag='a')
                        img(:src="headerLogo" height=60 width=100)
                    .nav-item
                        router-link(to='/')
                            q-btn(flat size='1.2rem').item-style ホーム
                        //- q-btn(flat size='1.2rem').item-style お知らせ
                        router-link(to='/about')
                            q-btn(flat size='1.2rem').item-style 会社概要
                        q-btn(flat size='1.2rem').item-style 事業内容
                        q-btn(flat size='1.2rem').item-style 採用情報
                        router-link(to='/contact')
                            q-btn(flat size='1.2rem').item-style お問い合わせ
    .mobile-header
        q-header(reveal :reveal-offset="100")
            .mobile-navbar-parent
                q-toolbar
                    router-link(to='/')
                        img.mobile-logo(:src="headerLogo")
                    q-space/
                    q-btn.mobile-btn(dense flat round icon='menu' @click='menuActive')

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component

export default class Header extends Vue {
    private headerLogo = require('@/assets/ksb-logo.svg');
    private menuStatus = false;
    private menuActive() {
        this.menuStatus = !this.menuStatus;
    }
}
</script>

<style scoped lang="stylus">
#header
    font-weight bold
.navbar-parent
    max-width 100%
    height 70px
    background-color #141C64
    // background linear-gradient(90deg, #70C8E4, #141C64) グラデーションのヘッダー
.navbar
    max-width 1024px
    height  100%
    margin 0 auto
    display flex
.nav-item
    margin-left auto
.item-style
    height: 100%
a
    color #ffffff
    font-weight bold
.mobile-header
    display none
.mobile-menu
    display none
@media screen and (max-width: 780px)
    .desktop-header
        display none
    .mobile-header
        display block
    .mobile-navbar-parent
        max-width 100%
        height 50px
        background-color #141C64
    .mobile-navbar
        max-width 100%
    .mobile-logo
        height 50px
    .mobile-menu
        display block
        position fixed
        height 100%
        width 100%
        z-index 9999
        background-color #FFFFFF
    .floating-menu-title
        margin 50px 0 50px 0
        font-size 3em
        text-align center
    .floating-menu
        height auto
        width 90%
        margin 0 auto
        margin-bottom 50px
    .menu-panel
        height 70px
        display flex
        justify-content center
        align-items center
        font-size 20px
        border-top 1px dotted #E0E0E0
        border-bottom 1px dotted #E0E0E0
        p
            margin 0
            color black
    .floating-logo
        text-align center

</style>
