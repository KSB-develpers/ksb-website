<template lang="pug">
#homepage

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Quasar from 'quasar';

@Component

export default class Homepage extends Vue {
    private checkVue = 'extends Vue!';
    private slide = 'first';
}
</script>

<style lang="stylus">

</style>
