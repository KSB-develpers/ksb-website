<template lang="pug">
#app
    Default
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Quasar from 'quasar';
import Default from '@/layouts/Default.vue';

@Component({
    components: {
        Default,
    },
})

export default class App extends Vue {}
</script>
