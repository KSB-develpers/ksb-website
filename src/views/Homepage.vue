<template lang="pug">
#homepage
    q-carousel(animated v-model='slide' arrows navigation infinite :autoplay='5000' swipeable height='40rem' transition-next='slide-left')
        q-carousel-slide(:name='1' img-src='https://cdn.quasar.dev/img/mountains.jpg')
        q-carousel-slide(:name='2' img-src='https://cdn.quasar.dev/img/mountains.jpg')
        q-carousel-slide(:name='3' img-src='https://cdn.quasar.dev/img/mountains.jpg')
        q-carousel-slide(:name='4' img-src='https://cdn.quasar.dev/img/mountains.jpg')

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Quasar from 'quasar';

@Component

export default class Homepage extends Vue {
    private slide = 1;
}
</script>

<style lang="stylus">

</style>
