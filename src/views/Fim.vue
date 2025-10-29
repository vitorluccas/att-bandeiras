<template>
  <div class="app-screen fim-screen">
    <div class="bg-shape bg-tr" style="background-color: #fffcd5b3;"></div>
    <div class="bg-shape bg-br" style="background-color: #eadee5b3;"></div>

    <div class="result-content">
      <h1 class="congrats-title">PARABÉNS!</h1>
      <h2 class="performance-text">SEU DESEMPENHO FOI EXCELENTE!</h2>
      
      <div class="stats-container">
        <div class="stat-item">
          <span class="stat-label">Total de Acertos:</span>
          <span class="stat-value">{{ appStore.acertos }}</span>
        </div>
        
        <div class="stat-item">
          <span class="stat-label">Tempo de Jogo:</span>
          <span class="stat-value">{{ appStore.cronometro }}</span>
        </div>
        
        <div class="stat-item" v-if="appStore.acertos > 0">
          <span class="stat-label">Pontuação Final:</span>
          <span class="stat-value">{{ calcularPontuacao() }} pontos</span>
        </div>
      </div>
    </div>

    <div class="fim-actions">
      <button class="btn-action btn-play" @click="jogarNovamente">JOGAR NOVAMENTE</button>
      <button class="btn-action btn-exit" @click="sair">SAIR</button>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/app';
import router from '@/router/index';

const appStore = useAppStore();

function calcularPontuacao() {
  // Pontuação baseada nos acertos (exemplo simples)
  return appStore.acertos * 100;
}

function jogarNovamente() {
  appStore.resetGame();
  router.push({ name: 'Game-app' });
}

function sair() {
  router.push({ name: 'home' });
}
</script>

<style scoped>
.fim-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  padding: 20px;
}

.result-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.congrats-title {
  font-size: 2.5em;
  color: #4CAF50;
  margin-bottom: 10px;
  font-weight: bold;
}

.performance-text {
  font-size: 1.2em;
  color: #444;
  margin-bottom: 40px;
}

.stats-container {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  width: 90%;
  max-width: 350px;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 10px;
  border-left: 4px solid #4CAF50;
}

.stat-label {
  font-weight: bold;
  color: #333;
  font-size: 1em;
}

.stat-value {
  font-weight: bold;
  color: #4CAF50;
  font-size: 1.1em;
}

.fim-actions {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding: 20px 0;
}

.btn-action {
  padding: 15px 0;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  flex: 1;
  font-size: 1em;
  min-width: 140px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.btn-play {
  background: linear-gradient(135deg, #4CAF50, #45a049);
  color: white;
}

.btn-play:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}

.btn-exit {
  background: linear-gradient(135deg, #f38f97, #e57373);
  color: white;
}

.btn-exit:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}

/* Elementos de fundo */
.bg-shape {
  position: absolute;
  border-radius: 50%;
  z-index: 0;
}
.bg-tr { 
  top: 0; 
  right: 0; 
  width: 170px; 
  height: 170px; 
  transform: translate(30%, -30%); 
}
.bg-br { 
  bottom: 0; 
  right: 0; 
  width: 160px; 
  height: 160px; 
  transform: translate(30%, 30%); 
}
</style>