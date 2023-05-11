function maiorPalavra(palavras) {
    let maior = palavras[0];
    for (let indice in palavras) {
      if (maior.length < palavras[indice].length) {
        maior = palavras[indice];
      }
    }
    return maior;
  }
    maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
