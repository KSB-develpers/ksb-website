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


</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Quasar from 'quasar';

@Component

export default class Homepage extends Vue {
    private slide = 1;
}
</script>

<style scoped lang="stylus">
</style>
