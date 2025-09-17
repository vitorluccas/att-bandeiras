<script setup>
import{useFlagStore} from '@/stores/flag'
import { useAppStore } from '@/stores/app';
const flagStore=useFlagStore();
const appStore = useAppStore();
appStore.sortearBandeiras(flagStore.flags);

</script>
<template>
  <H2>{{ appStore.bandeiraCerta.name }}</H2>
  <ul>
    <li v-for="bandeira in appStore.bandeirasSorteadas">
  
      <img :src="'/flags/'+ bandeira.image" alt="">
    </li>
  </ul>
</template>

<style>

</style>
