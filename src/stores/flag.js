import { defineStore } from 'pinia';

export const useFlagStore = defineStore('flag', {
  state: () => ({
    // Lista de "bandeiras" (formas coloridas) usadas no jogo.
    // 'id' deve ser único. 'cor' é usado para o CSS.
    flags: [
      { id: 1, cor: 'r' }, // Rosa
      { id: 2, cor: 'p' }, // Lilás
      { id: 3, cor: 'k' }, // Rosa Claro
      { id: 4, cor: 'b' }, // Azul
      { id: 5, cor: 'g' }, // Verde
      { id: 6, cor: 'y' }  // Amarelo
    ],
  }),
});
