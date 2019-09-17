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
        //- TODO: function.phpを書き換えて最新の記事4件を取得出来るようにする。カスタムwp-jsonの取得また、カテゴリーを取れるようにする。
        .newsList(v-for='post of ksbNews')
            a(:href='post.link') {{ post.title.rendered }}
            p {{ post.date }}

    .space-widh



</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Quasar from 'quasar';
import axios from 'axios';

@Component

export default class Homepage extends Vue {
    private slide = 1;
    // axiosで取得したデータを入れる配列
    private ksbNews = [];
    // 写真等のメディアを入れる配列
    private media = [];
    // エラーを入れる配列
    private error = [];
    // wp-jsonのURL
    private postURL: string = 'http://ksbnews.local/wp-json/wp/v2/posts/';

    private async getPosts() {
        try {
            await axios
                .get(this.postURL)
                .then((Response) => { this.ksbNews = Response.data; });
        } catch (error) {
            console.log('データ取得できませんでした。', error);
        }
    }

    private created() {
        this.getPosts();
    }

}
</script>

<style scoped lang="stylus">
.newsArea
    height 300px
    width 100%
    background-color #FFFFFF
</style>
