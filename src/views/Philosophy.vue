<template lang="pug">
#Philosophy
    .contents-area
        p.heading
            span.under 企業理念
        .space-small
        img.eyecatch(:src='eyecatch')
        .space-small
        p.heading
            span.under 7つの約束
        .space-small
        .commitment.row.items-start
            q-card.card-style(v-for='text in commitment' :key='text.id')
                q-card-section
                    p.sentence {{ text.commitment }}
                    p {{ text.translate }}
                    p {{ text.content }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Philosophy extends Vue {
    private eyecatch = require('../assets/philosophy.jpeg');
    private commitment = [
        {
            id: 1,
            commitment: 'Confidence',
            translate: '信頼',
            content: '人として信頼されること',
        },
        {
            id: 2,
            commitment: 'Courage',
            translate: '勇気',
            content: '失敗を恐れないこと',
        },
        {
            id: 3,
            commitment: 'Clever',
            translate: '賢く',
            content: '知識の研鑽に努め知恵を活かすこと',
        },
        {
            id: 4,
            commitment: 'Creative',
            translate: '創造',
            content: '想像力を豊かに創造すること',
        },
        {
            id: 5,
            commitment: 'Challange',
            translate: '挑戦',
            content: '困難に身を置き乗り越えること',
        },
        {
            id: 6,
            commitment: 'Cool',
            translate: 'カッコ良く',
            content: '万人から評価される生き方を目指すこと',
        },
        {
            id: 7,
            commitment: 'Change',
            translate: '変化',
            content: '決して現状に留まらないこと',
        },
    ];
}
</script>

<style lang="stylus" scoped>
.eyecatch
    width 100%
    display block
    margin 0 auto
    overflow hidden
.sentence
    font-size 1.4em
    text-align left
    font-weight bold
    margin 0
.slogan
    margin-right 30px
.commitment
    width 95%
    margin 0 auto
.card-style
    width 30%
    margin 16px
    // border 10px solid #000000
</style>

<style lang="stylus" scoped>
@media screen and (max-width 1024px)
    .commitment
        width 90%
        margin 0 auto
    .card-style
        width 45%
        margin 2.5%
</style>

<style lang="stylus" scoped>

@media screen and (max-width 500px)
    .commitment
        width 90%
        margin 0 auto
    .card-style
        width 100%
</style>
