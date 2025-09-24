<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
     <img src="../assets/Group 6872.png" alt="Imagens de acerto"></img>
  </header>
  <main>
    <h1>Parabéns</h1>
    <p>Você obteve 85 pontos</p>
    <button><router-link to="flag-app">Jogar Novamente</router-link></button>
    <button><router-link to="/">Sair</router-link></button>
  </main>
</template>
<style>

</style>