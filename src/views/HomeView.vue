<template>
  <div class="app-screen home-screen">
    <div class="bg-shape bg-tl" style="background-color: #fddbe1b3;"></div>
    <div class="bg-shape bg-bl" style="background-color: #dcf8e3b3;"></div>

    <header class="app-header home-header-align">Home</header>

    <div class="home-content">
        <div class="lamp-container">
            <div class="lamp-head"></div>
            <div class="lamp-stem"></div>
            <div class="lamp-base"></div>
        </div>
        
        <div class="logo">
            <div class="logo-icons">
                <div class="logo-sq logo-shape" style="background-color: #5599ff;"></div>
                <div class="logo-sq logo-tr logo-shape" style="background-color: #66cc99;"></div>
                <div class="logo-sq logo-cr logo-shape" style="background-color: #ff6666;"></div>
                <div class="logo-sq logo-shape" style="background-color: #ffcc66;"></div>
            </div>
            <h1>Padrão em<br>JOGO</h1>
        </div>
    </div>
    
    <RouterLink to="/game" class="btn-play">JOGAR</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
// Imports e lógica do Pinia/Vue Store podem ser adicionados aqui se necessário.
</script>

<style scoped>
/* CORES */
:root {
    --color-background: #fcfcfc;
    --color-text-dark: #444;
    --color-header-text: #b0b0b0;
    --btn-primary-bg: #f5ee8b; /* Amarelo Jogar */
}

/* Base da Tela */
.app-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    min-height: 100vh;
    padding: 20px;
    background-color: var(--color-background);
    color: var(--color-text-dark);
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    justify-content: space-between;
}

/* Header */
.app-header {
    width: 100%;
    font-weight: bold;
    color: var(--color-header-text);
    padding-bottom: 20px;
    font-size: 0.8em;
    z-index: 1;
}
.home-header-align { text-align: left; }

/* Elementos de Fundo (Círculos) */
.bg-shape {
    position: absolute;
    border-radius: 50%;
    z-index: 0;
}
.bg-tl { /* Top Left */
    top: 0; left: 0; width: 150px; height: 150px;
    transform: translate(-30%, -30%);
}
.bg-bl { /* Bottom Left */
    bottom: 0; left: 0; width: 130px; height: 130px;
    transform: translate(-30%, 30%);
}

/* Conteúdo Principal */
.home-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    z-index: 1;
    position: relative;
}

/* Logo e Texto */
.logo {
    position: absolute;
    top: 50px;
    left: 20px;
    text-align: left;
    font-weight: bold;
    line-height: 1.1;
    font-size: 1.4em;
}
.logo h1 { font-size: 1em; }
.logo-icons {
    display: inline-flex;
    gap: 3px;
    margin-bottom: 5px;
    vertical-align: middle;
}
.logo-shape { width: 12px; height: 12px; border-radius: 2px; }
.logo-cr { border-radius: 50%; }
.logo-tr { clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }

/* Lampião (Simulação) */
.lamp-container {
    position: absolute;
    top: 100px; 
    right: 50px; 
    width: 100px;
    height: 300px;
}
.lamp-head {
    width: 60px; height: 40px; background-color: #c0c0c0;
    border-radius: 50% 50% 5px 5px / 100% 100% 5px 5px;
    position: absolute; top: 0; left: 50%; transform: translateX(-50%);
}
.lamp-stem {
    width: 8px; height: 280px; background-color: #c0c0c0;
    position: absolute; top: 35px; left: 50%; transform: translateX(-50%);
}
.lamp-base {
    width: 80px; height: 5px; background-color: #c0c0c0;
    border-radius: 2px; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
}

/* Botão Jogar (Triângulo) */
.btn-play {
    position: absolute;
    bottom: 50px;
    right: 50px;
    width: 120px;
    height: 50px;
    background-color: var(--btn-primary-bg);
    clip-path: polygon(10% 0%, 100% 50%, 10% 100%); 
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
    font-weight: bold;
    text-decoration: none;
    color: var(--color-text-dark);
    border: none;
    cursor: pointer;
    font-size: 1.1em;
    z-index: 2;
}
</style>