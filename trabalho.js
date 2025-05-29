// Gera uma tag de identificação em letras maiúsculas
export function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase();
  }
  
  // Verifica se o pet pode ser adotado com base na idade e porte
  export function verificarSePodeSerAdotado(idade, porte) {
    return idade >= 1 && porte.toUpperCase() === 'M';
  }
  
  // Calcula o consumo diário de ração em gramas
  export function calcularConsumoDeRacao(nome, idade, pesoKg) {
    return pesoKg * 300;
  }
  
  // Define o tipo de atividade recomendada de acordo com o porte
  export function decidirTipoDeAtividadePorPorte(porte) {
    const atividades = {
      pequeno: 'brincar dentro de casa',
      medio: 'caminhada moderada',
      grande: 'corrida no parque'
    };
    return atividades[porte.toLowerCase()] || 'passeio diário';
  }
  
  // Retorna um dado de forma assíncrona
  export function buscarDadoAsync() {
    return new Promise(resolve => setTimeout(() => resolve('Pipoca'), 50));
  }
  