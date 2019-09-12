<template lang="pug">
#app
    q-layout(view="hhh lpR fFf")
        Header
        Hello
        Hello
        Hello
        Hello
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Quasar from 'quasar';
import Default from '@/layouts/Default.vue';
import Header from '@/components/Header.vue';
import Hello from '@/components/HelloWorld.vue';

@Component({
    components: {
        Default,
        Header,
        Hello,
    },
})

export default class App extends Vue {}
</script>
