<template lang="pug">
#header
    //- ヘッダーの実装部分
    q-header(reveal :reveal-offset="500")
        .navbar-parent
            .navbar
                router-link(to='/' tag='a')
                    img(:src="headerLogo")
                .nav-item
                    router-link(to='/')
                        q-btn(flat size='1.2rem').item-style ホーム
                    router-link(to='/about')
                        q-btn(flat size='1.2rem').item-style お知らせ
                    q-btn(flat size='1.2rem').item-style 会社概要
                    q-btn(flat size='1.2rem').item-style 事業内容
                    q-btn(flat size='1.2rem').item-style 採用情報
                    q-btn(flat size='1.2rem').item-style お問い合わせ

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component

export default class Header extends Vue {
    private headerLogo = require('@/assets/navbar-logo.png');
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
</style>
