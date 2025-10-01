<script setup>
import { useAppStore } from '@/stores/app'; // Importe a store
import { computed } from 'vue'; // Opcional, mas bom para lógica complexa
import { RouterLink } from 'vue-router'

const appStore = useAppStore();

const acertos = appStore.acertos; // O valor reativo (o ref)

const avaliacao = computed(() => {
  if (appStore.acertos <= 5) {
    return "Mal! Tente estudar mais as bandeiras. Você consegue melhorar!";
  } else if (appStore.acertos <= 10) {
    return "Bem! Você está no caminho certo. Continue jogando!";
  } else { // Acima de 10
    return "Excelente! Seu conhecimento de bandeiras é impressionante!";
  }
});

</script>

<template>
  <header>
     <img src="../assets/Group 6872.png" alt="Imagens de acerto"></img>
  </header>
  <main>
    <h1>Fim de Jogo!</h1>
    <h2>Você fez {{ acertos }} acerto{{ acertos.value != 1 ? 's' : '' }}.</h2>
    <p class="avaliacao">{{ avaliacao }}</p>
    <div class="botoes">
      <p>
      <router-link to="/flag-app">Jogar Novamente</router-link>
      </p>
      <p>
      <router-link to="/">Sair</router-link>
      </p>
    </div>
  </main>
</template>

<style>
header{
  text-align: center;
}
/* Adicione estilos para a nova estrutura se desejar */
/* Exemplo para centralizar a avaliação: */
.avaliacao {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: #4CAF50; /* Cor para dar destaque */
}

h2 {
    font-size: 1.5rem;
    color: #333;
}

.botoes {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
}


main a {
    /* ... seus estilos de botão aqui ... */
    background-color: #57ed7f;
    color: #fff;
    border: none;
    border-radius: 50px;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

</style>