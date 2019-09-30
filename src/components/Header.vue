<template lang="pug">
#header
    //- モバイル用のメニュー画面
    .mobile-menu(v-if='menuStatus')
        q-toolbar
            q-space/
            q-btn(dense flat round icon='close' @click='menuActive')
        p.floating-menu-title - Menu -
        .floating-menu
            router-link(to='/')
                .menu-panel(@click='menuActive')
                    a ホーム
            router-link(to='About')
                .menu-panel(@click='menuActive')
                    a 会社概要
            .menu-panel(@click='menuActive')
                a 事業内容
            .menu-panel(@click='menuActive')
                a 採用情報
            .menu-panel(@click='menuActive')
                a お問い合わせ
        .floating-logo
            img(:src="headerLogo" height=90 width=150)
    //- ヘッダーの実装部分
    .desktop-header
        q-header(reveal :reveal-offset="100")
            .navbar-parent
                .navbar
                    router-link(to='/' tag='a')
                        img.logo(:src="headerLogo" height=60 width=100)
                    .nav-item
                        router-link(to='/')
                            q-btn(flat size='1.2rem').item-style ホーム
                        //- q-btn(flat size='1.2rem').item-style お知らせ
                        router-link(to='/about')
                            q-btn(flat size='1.2rem').item-style 会社概要
                        router-link(to='/about')
                            q-btn(flat size='1.2rem').item-style 事業内容
                        router-link(to='/philospphy')
                            q-btn(flat size='1.2rem').item-style 採用情報
                        router-link(to='/contact')
                            q-btn(flat size='1.2rem').item-style お問い合わせ
    .mobile-header
        q-header(reveal :reveal-offset="100")
            .mobile-navbar-parent
                q-toolbar.toolbar-height
                    router-link(to='/')
                        img(:src="headerLogo" height=50 width=100)
                    q-space/
                    q-btn.mobile-btn(dense flat round icon='menu' color='indigo-10' @click='menuActive')

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
    background-color #FFFFFF
    border-bottom 3px solid #70C8E4
    // background linear-gradient(90deg, #70C8E4, #141C64) //グラデーションのヘッダー
.desktop-header
    height 70px
.navbar
    max-width 1024px
    height  100%
    margin 0 auto
    display flex
.nav-item
    margin-left auto
.item-style
    height: 100%
    font-weight bold
.logo
    padding-top 5px
a
    color #141C64
.toolbar-height
    height 70px
.mobile-header
    display none
.mobile-menu
    display none
@media screen and (max-width: 780px)
    .desktop-header
        display none
    .mobile-header
        display block
        height 70px
    .mobile-navbar-parent
        max-width 100%
        height 70px
        background-color #FFFFFF
        border-bottom 3px solid #70C8E4
    .mobile-navbar
        max-width 100%
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
    a
        margin 0
        color #141C64
        text-decoration none
    .floating-logo
        text-align center
</style>
