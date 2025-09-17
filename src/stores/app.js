import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const bandeirasSorteadas = ref([])
  const bandeiraCerta = ref(null)
  const qtdBandeiras = 9 
  const doubleCount = computed(() => count.value * 2)
  
  
  function sortearBandeiras(bandeiras) {
    while(bandeirasSorteadas.value.length < qtdBandeiras){
    const elementoSorteio = Math.floor(Math.random() * 50);
    const posicao = bandeirasSorteadas.value.findIndex((x) => x.id === bandeiras[elementoSorteio].id)
    if(posicao == -1){
      bandeirasSorteadas.value.push({...bandeiras[elementoSorteio]});
    }
    console.log(bandeirasSorteadas.value)
    }
    const correta = Math.floor(Math.random() * qtdBandeiras);
    bandeiraCerta.value = bandeirasSorteadas.value[correta]    
  }

  return {bandeirasSorteadas, sortearBandeiras, bandeiraCerta}
})
