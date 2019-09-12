<template>
  <q-page padding>
    <p> {{ text }}</p>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class About extends Vue {
    private text = 'This is an aboutpage';
}
</script>
