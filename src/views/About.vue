<template>
    <p> {{ text }}</p>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class About extends Vue {
    private text = 'This is an aboutpage';
}
</script>
