<template lang="pug">
#About
    .parallax-parent
        q-parallax(:src='keyVisual' :height='400')
            h1.heading-text 会社概要
    .sub-navbar


</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class About extends Vue {
    private keyVisual = require('@/assets/sendai-keyV.jpeg');
}
</script>

<style lang="stylus" scoped>
.parallax-parent
    max-width 1024px
    margin 0 auto
.sub-navbar
    height 40px
    background-color #70C8E4
</style>
