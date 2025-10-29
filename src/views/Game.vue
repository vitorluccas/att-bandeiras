<script setup>
import { useAppStore } from '@/stores/app';
import acerto from '@/assets/som/good.mp3'
import erro from '@/assets/som/fiasco.mp3'
import router from '@/router/index';
import { onMounted, onUnmounted } from 'vue';

const audioElement = new Audio(acerto);
const audioErro = new Audio(erro);
const appStore = useAppStore();

// --- CONFIGURAÇÃO DO JOGO ---
const TEMPO_TOTAL_JOGO = 60000;
let intervalo = null;

onMounted(() => {
  console.log('🔄 INICIANDO JOGO...');
  appStore.tempoInicio = Date.now();
  appStore.gerarPadrao();
  
  intervalo = setInterval(() => {
    const tempoDecorrido = Date.now() - appStore.tempoInicio;
    const segundosRestantes = Math.max(0, (TEMPO_TOTAL_JOGO - tempoDecorrido) / 1000);
    const minutos = Math.floor(segundosRestantes / 60);
    const segundos = Math.floor(segundosRestantes % 60);
    
    appStore.cronometro = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    
    if (tempoDecorrido >= TEMPO_TOTAL_JOGO) {
      clearInterval(intervalo);
      router.push({ name: 'fim-app' });
    }
  }, 1000);
});

onUnmounted(() => {
  if (intervalo) clearInterval(intervalo);
});

function verificarResposta(opcaoId) {
  console.log('🎯 Verificando resposta:', opcaoId);
  const acertou = appStore.verificarResposta(opcaoId);
  
  if (appStore.volumeOn) {
    if (acertou) {
      audioElement.play();
    } else {
      audioErro.play();
    }
  }
  
  setTimeout(() => {
    appStore.gerarPadrao();
  }, 800);
}

function reiniciarJogo() {
  appStore.resetGame();
  if (intervalo) clearInterval(intervalo);
  router.go(0);
}

function sairJogo() {
  if (intervalo) clearInterval(intervalo);
  router.push({ name: 'home' });
}
</script>

<template>
  <div class="app-screen">
    <!-- FUNDO -->
    <div class="bg-shape bg-tr"></div>
    <div class="bg-shape bg-br"></div>

    <!-- CABEÇALHO -->
    <header class="app-header">Padrão em Jogo</header>

    <!-- INFO DO JOGO -->
    <div class="game-info">
      <div class="timer">{{ appStore.cronometro }}</div> 
      <div class="score">{{ appStore.acertos }} ACERTO{{ appStore.acertos !== 1 ? 'S' : '' }}</div>
    </div>

    <!-- CONTEÚDO PRINCIPAL -->
    <main class="quiz-area">
      
      <!-- INSTRUÇÃO -->
      <h2>Complete o padrão da sequência:</h2>
      
      <!-- SEQUÊNCIA -->
      <div class="sequence-row">
        <div 
          v-for="item in appStore.sequencia" 
          :key="item.id"
          class="shape-box"
          :class="{
            'missing': !item.visivel,
            'color-r': item.visivel && item.cor === 'r',
            'color-p': item.visivel && item.cor === 'p', 
            'color-k': item.visivel && item.cor === 'k',
            'color-b': item.visivel && item.cor === 'b',
            'color-g': item.visivel && item.cor === 'g',
            'color-y': item.visivel && item.cor === 'y'
          }"
        >
          <span v-if="!item.visivel" class="question-mark">?</span>
        </div>
      </div>
      
      <!-- OPÇÕES -->
      <h3>Escolha a opção que completa o padrão:</h3>
      
      <div class="options-row">
        <div 
          v-for="opcao in appStore.opcoes"
          :key="opcao.id"
          class="option-box"
          :class="{
            'color-r': opcao.cor === 'r',
            'color-p': opcao.cor === 'p',
            'color-k': opcao.cor === 'k', 
            'color-b': opcao.cor === 'b',
            'color-g': opcao.cor === 'g',
            'color-y': opcao.cor === 'y'
          }"
          @click="verificarResposta(opcao.id)"
        >
        </div>
      </div>
      
    </main>

    <!-- BOTÕES -->
    <div class="actions">
      <button class="btn restart" @click="reiniciarJogo">RECOMEÇAR</button>
      <button class="btn exit" @click="sairJogo">SAIR</button>
    </div>
    
  </div>
</template>

<style scoped>
/* VARIÁVEIS DE CORES - DEFININDO CORES FIXAS */


/* LAYOUT PRINCIPAL */
.app-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  min-height: 100vh;
  padding: 20px;
  background-color: #fcfcfc;
  position: relative;
  margin: 0 auto;
}

/* FUNDO */
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
  background-color: #fffcd5b3;
  transform: translate(30%, -30%); 
}
.bg-br { 
  bottom: 0; 
  right: 0; 
  width: 160px; 
  height: 160px; 
  background-color: #eadee5b3;
  transform: translate(30%, 30%); 
}

/* CABEÇALHO */
.app-header {
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: #b0b0b0;
  padding-bottom: 20px;
  font-size: 0.9em;
  z-index: 1;
}

/* INFO DO JOGO */
.game-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  z-index: 1;
  font-weight: bold;
}
.timer, .score {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 1.1em;
}
.timer { 
  background-color: #e5d8f2; 
}
.score { 
  background-color: #a8e5b4; 
}

/* ÁREA DO QUIZ */
.quiz-area {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  margin-bottom: 20px;
}
.quiz-area h2 {
  font-size: 1.1em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
}

/* SEQUÊNCIA */
.sequence-row {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  width: 100%;
}
.shape-box {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* OPÇÕES */
.quiz-area h3 {
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
}
.options-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  width: 100%;
  max-width: 300px;
}
.option-box {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.option-box:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* ELEMENTO AUSENTE */
.missing {
  background-color: transparent;
  border: 3px dashed #d0d0d0;
}
.question-mark {
  font-size: 1.8em;
  font-weight: bold;
  color: #d0d0d0;
}

/* CORES - DEFININDO DIRETAMENTE */
.color-r { background-color: #f38f97 !important; }
.color-p { background-color: #c790d9 !important; }
.color-k { background-color: #f2c7d1 !important; }
.color-b { background-color: #97c2f3 !important; }
.color-g { background-color: #a8e5b4 !important; }
.color-y { background-color: #f5f2a9 !important; }

/* BOTÕES */
.actions {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding-bottom: 20px;
  z-index: 1;
}
.btn {
  padding: 12px 0;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  flex: 1;
  font-size: 1em;
  min-width: 120px;
  transition: all 0.2s ease;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
}
.restart {
  background-color: #f5ee8b;
  color: #444;
}
.restart:hover {
  background-color: #f5e87b;
  transform: translateY(-2px);
}
.exit {
  background-color: #f38f97;
  color: white;
}
.exit:hover {
  background-color: #f27f87;
  transform: translateY(-2px);
}

/* ESTILO DE FALLBACK - SE AS CORES NÃO CARREGAREM */
.shape-box:not(.missing) {
  background-color: var(--rosa);
}
.option-box {
  background-color: var(--rosa);
}
</style>