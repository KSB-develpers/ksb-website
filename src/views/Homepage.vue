<template lang="pug">
#Homepage
    //- 画像スライドショーの実装部分
    q-carousel(animated v-model='slide' navigation infinite :autoplay='5000' swipeable transition-next='slide-left' height='500px')
        q-carousel-slide(:name='1' img-src='https://cdn.quasar.dev/img/mountains.jpg')
        q-carousel-slide(:name='2' img-src='https://cdn.quasar.dev/img/mountains.jpg')
        q-carousel-slide(:name='3' img-src='https://cdn.quasar.dev/img/mountains.jpg')
        q-carousel-slide(:name='4' img-src='https://cdn.quasar.dev/img/mountains.jpg')
    .space-wide
    p.heading
        span.under お知らせ
    .space-small
    .newsArea
        //- TODO: カスタムwp-jsonの取得また、カテゴリーを取れるようにする。
        .newsList(v-for='post in ksbNews')
            a(:href='post.link') {{ post.title.rendered }}
    .space-wide



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

    // private created() {
    // }

}
</script>

<style scoped lang="stylus">
.newsArea
    height 300px
    width 100%
    background-color #FFFFFF
</style>
