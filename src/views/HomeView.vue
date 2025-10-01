<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <img src="../components/ChatGPT Image 15 de set. de 2025, 18_44_21 1.png" alt="Imagens de bamdeiras"></img>
  </header>
  <main>
    <h1>Encontre a bandeira</h1>
    <p>Indique a bandeira que corresponde ao país indicado</p>
    <p>
        <router-link to="flag-app">iniciar</router-link>
    </p>
  
  </main>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

/* Estilos globais do corpo da página */
body {
    font-family: 'Poppins', sans-serif;
    background-color: #fefefe; /* Cor de fundo suave */
    color: #333;
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    height: 100vh;
    box-sizing: border-box; /* Garante que o padding não cause overflow */
}

/* Estilos para o container principal */
main {
    text-align: center;
    padding: 2.5rem 2rem;
    max-width: 450px;
    width: 100%;
}

/* Estilos para o cabeçalho */


header img {
    max-width: 100%;
    height: auto;
    box-shadow: 0 4px 10px rgba(255, 254, 254, 0.1);
    text-align: center  ;
}

/* Estilos para os títulos e parágrafos */
h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #4a4a4a;
    margin-bottom: 0.5rem;
    line-height: 1.2;
}

p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 2.5rem;
}

/* Estilos para o botão */
p a {
    background: linear-gradient(to right, #068214, #068214); /* Gradiente de cor */
    color: white;
    border: none;
    border-radius: 50px;
    padding: 1rem 3.5rem; /* Padding maior para o botão */
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 5px 20px rgba(66, 233, 63, 0.4); /* Sombra com cor do gradiente */
    width: 100%; /* Ocupa a largura total */
    max-width: 250px; /* Limite de largura para não ficar muito grande */
}



/* Estilos para dispositivos menores */
@media (max-width: 600px) {
    h1 {
        font-size: 2rem;
    }

    p {
        font-size: 1rem;
    }
}
</style>