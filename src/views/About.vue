<template lang="pug">
#About
    .parallax-parent
        q-parallax(:src='keyVisual' :height='400')
            h1.heading-text 会社概要
    .space-wide
    .main-contents
        Philosophy
    .space-wide
    .main-contents
        Message
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Philosophy from './Philosophy.vue';
import Message from './Message.vue';

@Component({
    components: {
        Philosophy,
        Message,
    },
})

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
    display flex
    align-items center
    justify-content center
.nav-text
    color #FFFFFF
    font-size 15px
    font-weight bold
    margin 0
    padding-right 50px
    padding-left 50px
.main-contents
    max-width 1024px
    margin 0 auto
a
    text-decoration none
    font-size 18px
    color #FFFFFF
    font-weight bold
.active
    color #141C64
    font-weight bold
@media screen and (max-width 610px)
    .sub-navbar
        display none
</style>
