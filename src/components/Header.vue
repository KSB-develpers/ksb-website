<template lang="pug">
#header
    q-header(reveal :reveal-offset="500")
        .navbar-parent
            .navbar
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component

export default class Header extends Vue {}
</script>

<style lang="stylus">
.navbar-parent
    max-width 100%
    height 70px
    background-color #141C64
.navbar
    max-width 1000px
    margin 0 auto
</style>
