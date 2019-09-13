<template lang="pug">
#app
    q-layout(view='hhh lpR fFf')
        Header
        .main-content
            .spacer-1
            router-view

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Quasar from 'quasar';
import Header from '@/components/Header.vue';

@Component({
    components: {
        Header,
    },
})

export default class App extends Vue {}
</script>

<style lang="stylus">
.spacer-1
    height 70px
.main-content
    max-width 1000px
    margin 0 auto
</style>
