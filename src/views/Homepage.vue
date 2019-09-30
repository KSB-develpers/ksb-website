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
            q-card.my-card(v-for='item in abouts' dark :key='item.id')
                router-link(:to='item.root')
                    img.img-style(:src='item.img ')
                q-card-actions
                    router-link.btn-parent(:to='item.root')
                        q-btn.btn-style(flat size='1.3em') {{ item.action }}

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

    private abouts = [
        {
            id: 1,
            root: '/about',
            img: this.companyOverview,
            action: '会社概要',
        },
        {
            id: 2,
            root: '/about',
            img: this.business,
            action: '事業内容',
        },
        {
            id: 3,
            root: '/about',
            img: this.recruit,
            action: '採用情報',
        },
    ];
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
.my-card
    width 300px
    margin 15px
    background: #141C64
.img-style
    width 300px
    transition transform 500ms
.img-style:hover
    transform scale(0.85, 0.85)
.btn-parent
    display block
    margin 0 auto
    width 100%
.btn-style
    font-weight bold
    width 100%
    color #FFFFFF
@media screen and (max-width: 780px)
    // .about-parent
    //     width 90%
    //     margin 0 auto
    // .about-content
    //     width 100%
</style>
