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
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Philosophy extends Vue {
    private eyecatch = require('../assets/philosophy.jpeg');
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
    text-align center
    margin 0
    font-weight bold
@media screen and (max-width 600px)
    .sentence
        font-size 1em
        text-align center
        font-weight medium
</style>
