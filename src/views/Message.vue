<template lang="pug">
#Message
    .contents-area
        p.heading
            span.under 代表メッセージ
        .space-small
        img.president(:src='president')
        .space-small
        .text-area
            p.thought 仙台で中小企業の星になる
            .space-small
            p.sentence ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ。
            .space-small
            p.sign 代表取締役 社長 清水雄大
        .space-small
        img.president(:src='president')
        .space-small
        .text-area
            p.thought 仙台で中小企業の星になる
            .space-small
            p.sentence ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ。
            .space-small
            p.sign 代表取締役 副社長 木村佳寛
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component

export default class Message extends Vue {
    private president = require('../assets/yudai.png');
}
</script>

<style lang="stylus">
.president
    width 100%
    height auto
    border solid 1px #000000
.text-area
    margin 0 auto
    max-width 90%
.thought
    font-size 1.4em
    font-weight bold
    color #000000
.sentence
    font-size 1.4em
    color #000000
.sign
    font-size 1.4em
    color #000000
    text-align right
</style>
