<script setup>
import{useFlagStore} from '@/stores/flag'
import { useAppStore } from '@/stores/app';
import acerto from '@/assets/som/good.mp3'
import erro from '@/assets/som/fiasco.mp3'
const audioElement = new Audio(acerto);
const audioErro = new Audio(erro);
const flagStore=useFlagStore();
const appStore = useAppStore();
appStore.acertos=0
appStore.sortearBandeiras(flagStore.flags);
function verificarAcerto(id) {
 
  if(appStore.bandeiraCerta.id == id){
    appStore.bandeirasSorteadas = [];
    console.log(id)
    appStore.sortearBandeiras(flagStore.flags)
    audioElement.play();
    appStore.acertos++
  }
  else{
    audioErro.play(erro)
  }
  
}

</script>
<template>
  <header>
    <p>
      <img src="/public/tempo.png" alt="cronometro">
      <span>cronometro</span> 
      <img src="/public/volume.png" alt="volume">
    </p>
  </header>
  <main>
    
    <H1>{{ appStore.bandeiraCerta.name }}</H1>
    <ul>
      <li v-for="bandeira in appStore.bandeirasSorteadas">
                     
        <img :src="'/flags/'+ bandeira.image" alt="" @click="verificarAcerto(bandeira.id)">
      </li>
    </ul>
    <h3>{{ appStore.acertos }}/5</h3>
    <button><router-link to="/">Sair</router-link></button>
    
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

/* Estilos globais para o corpo da página */
body {
    font-family: 'Poppins', sans-serif;
    background-color: #f0f0f5;
    color: #333;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
}

/* Estilos do cabeçalho */
header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    padding: 15px;
    margin-bottom: 2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

header p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0;
}

header img {
    height: 30px;
    width: auto;
}

header span {
    font-size: 1.2rem;
    font-weight: 600;
    color: #4a4a4a;
}

/* Estilos do conteúdo principal */
main {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 40px); /* Ajusta a altura para telas pequenas */
}

/* Estilos para o container do nome do país */
.nome-pais-container {
    background-color: #d6f2d6; /* Fundo verde claro */
    border-radius: 20px;
    padding: 20px 0 20px 0;
    margin-bottom: 2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Estilos para o título (nome do país) */
h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #545353;
    margin: 0;
    line-height: 1.2;
    margin: 0 0 30px 0;
    padding: 20px 40px;
    background-color: rgb(153, 235, 153);
    border-radius: 10px;
}

/* Estilos da lista de bandeiras (container) */
ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 colunas, como na imagem */
    gap: 15px; /* Espaçamento entre os itens */
}

/* Estilos para cada item da lista (li) */
li {
    background-color: #fff;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
    padding: 10px;
}

li:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Estilos para as imagens das bandeiras */
li img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

/* Contêiner para o placar e o botão de sair */
.bottom-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
}

/* Estilo para o contador de acertos */
h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #666;
}

/* Estilo para o botão de sair */
.sair-btn {
    background-color: #ccc;
    color: #fff;
    border: none;
    border-radius: 50px;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.sair-btn:hover {
    background-color: #bbb;
}

/* Estilos para o link dentro do botão de sair */
.sair-btn router-link {
    text-decoration: none;
    color: #fff;
    display: block;
}

/* Estilos para dispositivos menores */
@media (max-width: 400px) {
    h1 {
        font-size: 1.5rem;
    }

    header img {
        height: 25px;
    }

    header span {
        font-size: 1rem;
    }

    ul {
        gap: 10px;
    }
    
    .bottom-container {
        flex-direction: column;
    }

    .sair-btn {
        margin-top: 1rem;
        width: 100%;
    }
}

</style>
