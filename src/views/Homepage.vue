<template lang="pug">
#Homepage
    //- 画像スライドショーの実装部分
    q-carousel(animated v-model='slide' navigation infinite :autoplay='5000' swipeable transition-next='slide-left' height='500px')
        q-carousel-slide(:name='1' img-src='https://cdn.quasar.dev/img/mountains.jpg')
        q-carousel-slide(:name='2' img-src='https://cdn.quasar.dev/img/mountains.jpg')
        q-carousel-slide(:name='3' img-src='https://cdn.quasar.dev/img/mountains.jpg')
        q-carousel-slide(:name='4' img-src='https://cdn.quasar.dev/img/mountains.jpg')
    .space-wide
    //- p.heading
    //-     span.under お知らせ
    //- .space-small
    //- .newsArea
    //- .space-wide
    .contents-area
        p.heading
            span.under KSB について知る
        .space-small
        .about-parent
            .about-content
                img.caption-style(:src='companyOverview')
                router-link(to='/about')
                    q-btn.btn-style(outline color='blue-4') 会社概要
            //- .side-space
            .about-content
                img.caption-style(:src='business')
                q-btn.btn-style(outline color='blue-4') 事業内容
            //- .side-space
            .about-content
                img.caption-style(:src='recruit')
                q-btn.btn-style(outline color='blue-4') 採用情報
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Quasar from 'quasar';
import axios from 'axios';

@Component

export default class Homepage extends Vue {
    private slide = 1;
    // axiosで取得したpostsデータを入れる配列
    private ksbNews = [];
    // axiosで取得したcategoriesデータを入れる配列
    private categories = [];
    // ドメインURL
    private wpURL = 'http://ksbnews.local/';
    // 画像インポート
    private companyOverview = require('@/assets/sendai.jpeg');
    private business = require('@/assets/work.jpg');
    private recruit = require('@/assets/recruit.jpg');

    // private created() {
    // }

}
</script>

<style scoped lang="stylus">
// .newsArea
//     height 300px
//     width 100%
//     background-color #FFFFFF
#Homepage
    max-width 1024px
    margin 0 auto
.slide-style
    height 400px
.about-parent
    width 100%
    display flex
    flex-wrap wrap
    justify-content center
.about-content
    width 300px
    margin 15px
    display block
.side-space
    height 30px
.caption-style
    width 100%
    transition-duration 500ms
.caption-style:hover
    transform scale(0.9, 0.9)
    border-radius 10px
.btn-style
    width 100%
    border-radius 10px
    height 70px
    font-size 15px
    margin 15px 0 0 0
    font-weight bold

@media screen and (max-width: 780px)
    // .about-parent
    //     width 90%
    //     margin 0 auto
    // .about-content
    //     width 100%
</style>
